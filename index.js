function validateUKDrivingLicense(licenseNumber) {
    const regex = /^[A-Z9]{5}\d{6}[A-Z9]{2}\d[A-Z]{2}$/;
    return regex.test(licenseNumber);
}

module.exports = validateUKDrivingLicense;