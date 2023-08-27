package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
	"sync"
	"time"
)

type MovieLink struct {
	Id     int
	ImdbId string
	TmdbId string
}

const (
	Odd  string = "odd"
	Even string = "even"
)

func main() {
	var wg sync.WaitGroup

	startTime := time.Now()
	file, err := os.Open("ml-latest/links.csv")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	items := 10000
	itemsPerWorker := 100
	kind := Odd
	numberWorkers := 1
	if items > itemsPerWorker {
		numberWorkers := items / itemsPerWorker
		if items%itemsPerWorker != 0 {
			numberWorkers++
		}
	}

	jobQueue := make(chan []string, numberWorkers)

	wg.Add(1)
	go func() {
		csvReader := csv.NewReader(file)

		if _, err := csvReader.Read(); err != nil {
			log.Fatal(err)
		}

		for {
			row, err := csvReader.Read()
			if err == io.EOF {
				break
			}
			if err != nil {
				log.Fatal(err)
			}
			jobQueue <- row
		}
		defer wg.Done()
	}()

	outputChannel := make(chan []MovieLink, numberWorkers)
	for i := 0; i < numberWorkers; i++ {
		wg.Add(1)
		go func() {
			worker(jobQueue, outputChannel, itemsPerWorker, kind)
			wg.Done()
		}()
	}

	movies := make([]MovieLink, items)
	for chunk := range outputChannel {
		fmt.Printf("== lines : %d\n", len(movies))
		movies = append(movies, chunk...)
		if len(movies) >= items {
			close(outputChannel)
			break
		}
	}

	// wg.Wait()
	fmt.Printf("lines : %d\n", len(movies))
	fmt.Printf("The seconds difference is: %fs\n", time.Since(startTime).Seconds())
}

func worker(jobChannel <-chan []string, output chan<- []MovieLink, itemsPerWorker int, kind string) {
	movies := make([]MovieLink, itemsPerWorker)
	for line := range jobChannel {
		item, err := marshal(line)
		if err == nil {
			if kind == Odd && item.Id%2 == 1 {
				// fmt.Printf("Add odd %s\n", line)
				movies = append(movies, *item)
			}
			if kind == Even && item.Id%2 == 0 {
				// fmt.Printf("Add even %s\n", line)
				movies = append(movies, *item)
			}
			fmt.Printf("collected size %d\n", len(movies))
			if len(movies) == itemsPerWorker {
				output <- movies
				break
			}
		} else {
			log.Fatal(err)
		}
	}
}

func marshal(row []string) (*MovieLink, error) {
	var movie MovieLink
	for j, field := range row {
		if j == 0 {
			id, err := strconv.Atoi(field)
			if err != nil {
				return nil, err
			}
			movie.Id = id
		} else if j == 1 {
			movie.ImdbId = field
		} else if j == 2 {
			movie.TmdbId = field
		}
	}

	return &movie, nil
}
