<?php
libxml_disable_entity_loader(true);
$doc = new DOMDocument();
$doc->loadXML($xml, LIBXML_NONET);
