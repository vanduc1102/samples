package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strconv"
	"sync"
	"time"
)

var mu sync.Mutex

func main() {
	f, _ := os.Open("./1000k.csv")
	defer f.Close()
	f1, _ := os.Open("./1000k.csv")
	defer f1.Close()

	ts := time.Now()
	// basicRead(f)
	basicReadStruct(f)
	te := time.Since(ts)

	ts1 := time.Now()
	// concurrentRead(f1)
	// concurrentReadStruct(f1)
	concurrentReadStructWithWorkerPool(f1)
	te1 := time.Since(ts1)

	// Read and Set to a map
	fmt.Println("\nEND Basic: ", te)
	fmt.Println("END Concurrent: ", te1)
}

func concurrentReadStructWithWorkerPool(f *os.File) {
	fileCsv := csv.NewReader(f)
	rs := make([]*Sale, 0)
	numWps := 100
	jobs := make(chan []string, numWps)
	res := make(chan *Sale)

	var wg sync.WaitGroup
	worker := func(jobs <-chan []string, results chan<- *Sale) {
		for {
			select {
			case job, ok := <-jobs: // you must check for readable state of the channel.
				if !ok {
					return
				}
				results <- parseStruct(job)
			}
		}
	}

	// init workers
	for w := 0; w < numWps; w++ {
		wg.Add(1)
		go func() {
			// this line will exec when chan `res` processed output at line 107 (func worker: line 71)
			defer wg.Done()
			worker(jobs, res)
		}()
	}

	go func() {
		for {
			rStr, err := fileCsv.Read()
			if err == io.EOF {
				break
			}
			if err != nil {
				fmt.Println("ERROR: ", err.Error())
				break
			}
			jobs <- rStr
		}
		close(jobs) // close jobs to signal workers that no more job are incoming.
	}()

	go func() {
		wg.Wait()
		close(res) // when you close(res) it breaks the below loop.
	}()

	for r := range res {
		rs = append(rs, r)
	}

	fmt.Println("Count Concurrent ", len(rs))
}

func concurrentReadStruct(f *os.File) {
	fileCsv := csv.NewReader(f)
	rs := make(map[int64]*Sale)

	var wg sync.WaitGroup
	for {
		rowString, err := fileCsv.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("ERROR: ", err.Error())
			break
		}
		wg.Add(1)
		go func(innerWg *sync.WaitGroup) {
			defer innerWg.Done()
			obj := parseStruct(rowString)
			mu.Lock()
			rs[obj.OrderId] = obj
			mu.Unlock()
		}(&wg)
	}
	wg.Wait()
	fmt.Println("Count Concu ", len(rs))
}

func concurrentRead(f *os.File) {
	fileCsv := csv.NewReader(f)
	for {
		rowString, err := fileCsv.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("ERROR: ", err.Error())
			break
		}
		go printData(rowString, "CC")
	}
}

func basicReadStruct(f *os.File) {
	fileCsv := csv.NewReader(f)
	row := make([]*Sale, 0)
	for {
		rowString, err := fileCsv.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("ERROR: ", err.Error())
			break
		}
		row = append(row, parseStruct(rowString))
	}
	fmt.Println("Count Basic ", len(row))
}

func basicRead(f *os.File) {
	fileCsv := csv.NewReader(f)
	for {
		rowString, err := fileCsv.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("ERROR: ", err.Error())
			break
		}
		printData(rowString, "BS")
	}
}

type Sale struct {
	Region        string  `json:"region"`
	Country       string  `json:"country"`
	ItemType      string  `json:"item_type"`
	SaleChannel   string  `json:"sale_channel"`
	OrderPriority string  `json:"order_priority"`
	OrderDate     string  `json:"order_date"`
	OrderId       int64   `json:"order_id"`
	ShipDate      string  `json:"ship_date"`
	UnitSold      int64   `json:"unit_sold"`
	UnitPrice     float64 `json:"unit_price"`
	UnitCost      float64 `json:"unit_cost"`
	TotalRevenue  float64 `json:"total_revenue"`
	TotalCost     float64 `json:"total_cost"`
	TotalProfit   float64 `json:"total_profit"`
}

func printData(data []string, job string) {
	obj := parseStruct(data)
	js, _ := json.Marshal(obj)
	fmt.Printf("\n[%v] ROW Id: %v - len %v", job, obj.OrderId, len(js))
}

func parseStruct(data []string) *Sale {
	id, _ := strconv.ParseInt(data[6], 10, 64)
	unitSold, _ := strconv.ParseInt(data[8], 10, 64)
	unitPrice, _ := strconv.ParseFloat(data[9], 64)
	unitCost, _ := strconv.ParseFloat(data[10], 64)
	totalRev, _ := strconv.ParseFloat(data[11], 64)
	totalCost, _ := strconv.ParseFloat(data[12], 64)
	totalProfit, _ := strconv.ParseFloat(data[13], 64)
	return &Sale{
		Region:        data[0],
		Country:       data[1],
		ItemType:      data[2],
		SaleChannel:   data[3],
		OrderPriority: data[4],
		OrderDate:     data[5],
		OrderId:       id,
		ShipDate:      data[7],
		UnitSold:      unitSold,
		UnitPrice:     unitPrice,
		UnitCost:      unitCost,
		TotalRevenue:  totalRev,
		TotalCost:     totalCost,
		TotalProfit:   totalProfit,
	}
}

// arg <-chan int : read only
// arg chan<- int : write only
// arg chan int   : read & write
