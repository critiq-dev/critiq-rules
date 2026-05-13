<?php
function handler($request) {
  return file_get_contents($request['path']);
}
