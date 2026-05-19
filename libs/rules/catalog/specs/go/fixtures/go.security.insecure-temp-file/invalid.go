package main

import "io/ioutil"

func writeReport() error {
	_, err := ioutil.TempFile("", "report-")
	return err
}
