// Regular expressions for email addresses, phone numbers, and URLs
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const phoneRegex = /(\+\d{1,4})?[\s\(\)\-]*\d{1,4}[\s\(\)\-]*\d{1,4}[\s\(\)\-]*\d{1,4}/g;
const urlRegex = /^(www\.)?[A-Za-z0-9.-]+\.(org|edu|com|io)(\/\S*)?$/;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the text to analyze: ', (inputText) => {
  // Detect and print email addresses
  const emailAddresses = inputText.match(emailRegex);
  if (emailAddresses) {
    console.log('Email Addresses:');
    emailAddresses.forEach((email, index) => {
      console.log(`${index + 1}: ${email}`);
    });
  } else {
    console.log('No email addresses found.');
  }

  // Detect and print phone numbers
  const phoneNumbers = inputText.match(phoneRegex);
  if (phoneNumbers) {
    console.log('\nPhone Numbers:');
    phoneNumbers.forEach((phone, index) => {
      console.log(`${index + 1}: ${phone}`);
    });
  } else {
    console.log('\nNo phone numbers found.');
  }

  // Detect and print URLs
  const urls = inputText.match(urlRegex);
  if (urls) {
    console.log('\nURLs:');
    urls.forEach((url, index) => {
      console.log(`${index + 1}: ${url}`);
    });
  } else {
    console.log('\nNo URLs found.');
  }

  rl.close();
});
