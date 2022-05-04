### Hexlet tests and linter status:
[![Actions Status](https://github.com/BellatorJS/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/BellatorJS/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a0936b3fc770739f134b/maintainability)](https://codeclimate.com/github/BellatorJS/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a0936b3fc770739f134b/test_coverage)](https://codeclimate.com/github/BellatorJS/frontend-project-lvl2/test_coverage)
[![Node CI](https://github.com/BellatorJS/frontend-project-lvl2/actions/workflows/Node_CI.yml/badge.svg)](https://github.com/BellatorJS/frontend-project-lvl2/actions/workflows/Node_CI.yml)

<h2>:performing_arts: Gen difference is an application that helps you find the difference. </h2>
	<p>This project is a console application that allows you to merge two files for changes. Supported file types are Json and Yaml. The format of the result of the changes is displayed on the screen and is available in the Json, Plain Text and Classic Cascading formats.</p>
	
	
<h2>:package: Installation Guide </h2>
		<ul>
		  <li> 
		  	<p>Installation</p>
		  	</li>
		  	<pre>$git clone https://github.com/BellatorJS/frontend-project-lvl2</br>$make install</pre>
		  <li> <p>Check of launch </p>
		  	</li>
		  	<pre>$npx gendiff</pre>
<h2> :rocket: Launch and demo of gendiff</h2>
<h4> Demonstration of the results of comparing two files of a nested structure in accessible formats.	</h4>
	<p>file1.json</p>
		<pre>
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
  		</pre>
  	<p>file2.json</p>
	<pre>
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
  	</pre>
	<h4> Demonstration of the output of the difference in the default format - stylish.</h4>
	<pre>$gendiff file1.json file2.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/timHKfzx20BhNOWcbqVMZrhlI" target="_blank"><img src="https://asciinema.org/a/timHKfzx20BhNOWcbqVMZrhlI.svg" /></a>
		</p>
	<h4> Demonstration of the output of the difference in the format - plain text.</h4>
	<pre>$gendiff -f plain file1.json file2.json</pre>
		<p align="center">
		<<a href="https://asciinema.org/a/tHdpW0m6LBnniY84pEjfpxrSv" target="_blank"><img src="https://asciinema.org/a/tHdpW0m6LBnniY84pEjfpxrSv.svg" /></a>
		</p>
	<h4> Demonstration of the output of the difference in the format - JSON.</h4>
	<pre>$gendiff -f json file1.json file2.json</pre>
		<p align="center">
		<a href="https://asciinema.org/a/mvMM58jt6Q0ltWnVnCbw5HAY9" target="_blank"><img src="https://asciinema.org/a/mvMM58jt6Q0ltWnVnCbw5HAY9.svg" /></a>
		</p>

