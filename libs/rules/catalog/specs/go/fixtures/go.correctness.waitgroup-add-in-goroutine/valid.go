package main

import "sync"

func runWorkers(jobs []func()) {
	var wg sync.WaitGroup
	for _, job := range jobs {
		wg.Add(1)
		go func(work func()) {
			defer wg.Done()
			work()
		}(job)
	}
	wg.Wait()
}
