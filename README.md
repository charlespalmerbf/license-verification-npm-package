# @charlespalmerbf/license-verification

The provided code defines a function called validateUKDrivingLicense, which takes a licenseNumber as input. The purpose of this function is to validate whether the given licenseNumber is a valid UK driving license number.

# Installation

`npm install @charlespalmerbf/license-verification`

# Usage

`node`

```js
const validateUKDrivingLicense = require("@charlespalmerbf/license-verification");

console.log(validateUKDrivingLicense("TESTR003060GN9NB")); //true
console.log(validateUKDrivingLicense("ABC123456789DEF01")); //false
```

# Build

`npm run build`

# Contribute

If you would like to contribute, you are welcome. Clone repository and open pull request.

# About

The provided code defines a function called `validateUKDrivingLicense`, which takes a `licenseNumber` as input. The purpose of this function is to validate whether the given `licenseNumber` is a valid UK driving license number.

The function uses a regular expression (`regex`) to perform the validation. The regular expression pattern is as follows:

regex

`/^[A-Z9]{5}\d{6}[A-Z9]{2}\d[A-Z]{2}$/`

Let's break down the regular expression pattern:

-   `^` and `$` denote the start and end of the string, respectively. This ensures that the entire string matches the pattern.
-   `[A-Z9]{5}` matches exactly five characters that can be uppercase letters (A-Z) or the number 9. This part represents the first five characters of the license number.
-   `\d{6}` matches exactly six digits (0-9). This part represents the next six characters of the license number.
-   `[A-Z9]{2}` matches exactly two characters that can be uppercase letters (A-Z) or the number 9. This part represents the next two characters of the license number.
-   `\d` matches a single digit (0-9). This part represents the next digit of the license number.
-   `[A-Z]{2}` matches exactly two uppercase letters (A-Z). This part represents the final two characters of the license number.

If the provided `licenseNumber` matches this pattern, the function will return `true`, indicating that the license number is valid. Otherwise, it will return `false`.
