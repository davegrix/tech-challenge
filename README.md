#Technical Challenge

For this technical assignment we would like for you to complete a simple task that demonstrates your understanding of solving a technical problem in nodeJS. The challenge requirements are detailed below.


##Tasks

The object of the provided express server is to provide an endpoint that works as a simple currency convertor. It will expect 3 parameters given in the query and should return a json object.

###Task 1

Obtain currency values from https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml. This will provide you with current currency values in respect to the Euro.

###Task 2

Create a function that converts any currency from the below list to any other currency in the same list

1. EUR
2. USD
3. GBP
4. AUD
5. CAD

###Task 3

Extend the given /converter endpoint to accept the following params (these will be provided in the query format, e.g `<url>?param1=a&param2=b` etc)


valueToExchange - This will be numeric


currencyFrom - One of the 3 digit currency codes above


currencyTo - One of the 3 digit currency codes above



These params should then be used to call your function from task 2 and return an json object like the below:

```json
{
  "currencyTo": "USD",
  "conversion": 150
}
```

## Overview

Please feel free to use any libraries you require to complete the challenge, as well as Google or any other resources you need.

Please feel free to ask any questions, and share your main IDE screen throughout the challenge.

Good luck!





