<?php
Promise.all($items->map(fn($item) => task($item)));
