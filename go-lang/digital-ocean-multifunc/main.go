package main

import (
	"fmt"
	"sync"
	"time"
)

func generateNumbers(total int, wg *sync.WaitGroup, ch chan<- int) {
	defer wg.Done()
	for i := 1; i <= total; i++ {
		fmt.Printf("sending %d to channel time=%v\n", i, time.Now())
		time.Sleep(time.Second * 2)
		ch <- i
	}
}

func printNumbers(wg *sync.WaitGroup, ch <-chan int) {
	defer wg.Done()
	for value := range ch {
		time.Sleep(time.Second)
		fmt.Printf("reading %d from channel time=%v\n", value, time.Now())
	}
}

func main() {
	var wg sync.WaitGroup

	numberChannel := make(chan int)
	for i := 0; i < 12; i++ {
		wg.Add(1)
		go printNumbers(&wg, numberChannel)
	}

	generateNumbers(3, &wg, numberChannel)

	close(numberChannel)

	fmt.Printf("Waiting for goroutines to finish... time=%v\n", time.Now())
	wg.Wait()
	fmt.Printf("Done at time=%v\n", time.Now())
}
