package main

import "sync"

func runWorkers(jobs []func()) {
	var wg sync.WaitGroup
	for _, job := range jobs {
		go func(work func()) {
			wg.Add(1)
			defer wg.Done()
			work()
		}(job)
	}
	wg.Wait()
}
