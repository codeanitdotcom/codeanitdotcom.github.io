---
 
title: Google FooBar First Challenge
subtitle: Solving Caesar Cipher
date: '2020-07-19'
categories: ['google', 'challenge', 'series', 'cipher']
keywords: ['google', 'challenge', 'series', 'cipher', 'first', 'caesar']
slug: google-foobar-first-challenge-caesar-cipher
cover: './img/google-foobar-first-challenge-solved.png'
type: 'BlogPost'
 
---
 
 
### Background
I received a surprise code challenge invitation from Google on July 26, 2020. After accepting the invitation, I was redirected to https://foobar.withgoogle.com where I completed my first challenge.
 
In this post I will share my experience solving the challenge.

  
### The Problem: Caesar Cipher Decryption
Decrypt a code where every lowercase letter [a..z] is replaced with the corresponding one in [z..a], while every other character (including uppercase letters and punctuation) is left untouched. That is, 'a' becomes 'z', 'b' becomes 'y', 'c' becomes 'x', etc.  For instance, the word "vmxibkgrlm", when decoded, would become "encryption".
 
There was some limitation to execution time and the external Java library usage environment provided was default Java Runtime Environment (JRE) 8.
 
 
### What is Caesar Cipher?
A `Cipher` is a method for encrypting a message, intending to make it less readable. As for the `Caesar Cipher`, it's a substitution cipher that transforms a message by shifting its letters by a given offset.
 
 
### Initial Thoughts
After going through the problem and some analysis, the rough idea I could come up with as a part of the solution was manipulating the ASCII value of the letters. Addition and subtraction of numeric value of numbers should do the trick but at this point I did not think of `Caesar Cipher` at all. Implementing the initial idea to anything concrete was taking some time so I went with the simplest solution that I could work out.
 
 
### First Attempt
To solve the problem I needed a data structure to keep a map of the encryption and easily access the decrypted value. `HashMap` was the best fit. The other part of the solution required a data structure to store the decrypted characters as a `String`. Although `Character Array` would have been the ideal way, `StringBuilder` with `Java 8` `SteamAPI` was the quickest option that did the trick. Hence, I went with the implementation built based on these base data types. The rough solution did the job and ran successfully at my local but sadly it did not pass the challenge tests.
 
```java
public static String solnWithStrBuilder(String x) {
   StringBuilder stb = new StringBuilder();
   x.chars().forEach(i -> stb.append(decrypt(i)));
   return stb.toString();
}
public static char decrypt(int encryptedVal) {
   if ( encryptedVal >= 97 && encryptedVal <= 122) {
       char encodedChar;
       Map<Integer, Character> decryptKey = new HashMap<>();
       for (int i = 122, j = 97; i >= 97; i--, j++) {
           encodedChar = (char) i;
           decryptKey.put(j, encodedChar);
       }
       return decryptKey.get(encryptedVal);
   }
   else return (char)encryptedVal;
}
```
 
 
### Second Iteration
I reflected back on the limitations. I knew a cheaper data structure, `Character Array`, could have done the job instead of `StringBuilder` class. I thought that might be the reason that the solution failed to fulfill the criteria, so I refactored the code replacing StringBuilder with a simple Character Array. But this solution also failed to pass any of the tests.
 
At this point I was getting a little bit frustrated because the errors were not thrown back properly. I was not sure what failed. To be honest, I had lost interest after one hour of trials and gave up. I needed to prepare for interviews and I went back to my previous way, learning basics and solving challenges from different sources.
 
```java
public static String solnWithArray(String encryptedText) {
   char[] encryptedCharArr = new char[encryptedText.length()];
   Map<Integer, Character> decryptKey = new HashMap<>();
   char encodedChar;
 
   for (int i = 122, j = 97; i >= 97; i--, j++) {
       encodedChar = (char) i;
       decryptKey.put(j, encodedChar);
   }
 
   for (int i = 0; i < encryptedText.length(); i++) {
       char encryptedVal = encryptedText.charAt(i);
       if ( encryptedVal >= 97 && encryptedVal <= 122) {
           encryptedCharArr[i] = decryptKey.get((int)encryptedVal);
 
       } else encryptedCharArr[i] = encryptedVal;
   }
 
   return new String(encryptedCharArr);
}
```
 
 
### Third Iteration
I wanted to solve the problem and came back to it again with less than 3 hours left to complete the other day.
 
As I had never participated in `Google FooBar Challenge`, and even never heard of it, I wanted to know more as I did not want to waste more time if there would be no value in participating in the event, and I needed to continue my preparation. So after some search, I knew more about the challenge and that it was an invitation only and used by Google for recruitment. It added more motivation to solve the problem but then I was running out of time.
 
I reflected back on the problem statement and the constraints again. As I knew that there would be other ASCII based optimum solutions which might satisfy the conditions, I did some more research on ways to encrypt letters with other letters and other standard encryption processes. It led to the `Cesar Cipher` which was the term that I was looking for. After digging more into it, I found a simple example by [Baeldung.com](https://www.baeldung.com/java-caesar-cipher) which laid the foundation to my initial ASCII based solution.
 
```java
StringBuilder result = new StringBuilder();
for (char character : message.toCharArray()) {
       if (character != ' ') {
           int originalAlphabetPosition = character - 'a';
           int newAlphabetPosition = (originalAlphabetPosition + offset) % 26;
           char newCharacter = (char) ('a' + newAlphabetPosition);
           result.append(newCharacter);
       } else {
           result.append(character);
       }
}
   
return result;
```
 
Baeldung's example `encrypts` letters. It did not `decrypt`. Letter `a` was used as the base for the encryption process. Understanding the encryption process was very important to successfully decrypt the cipher. So based on this framework I created an encryption system that generates the cipher which is our problem.
 
```java
public static String encrypt(String textToEncrypt) {
   StringBuilder result = new StringBuilder();
 
   for (char character : textToEncrypt.toCharArray()) {
 
       if ( (int)character >= 97 && (int)character <= 122 ) {
           int originalAlphabetPosition = character - 'z';
           int newAlphabetPosition = ( originalAlphabetPosition + 25 ) % 26;
           result.append((char) ('z' - newAlphabetPosition));
 
       } else {
           result.append(character);
       }
   }
 
   return new String(result);
}
```
 
Then creating a decryption mechanism was some maths and common sense. Then again, the solution failed.
 
```java
public static String solutionWithOffset(String encryptedText) {
   StringBuilder result = new StringBuilder();
 
   for (char character : encryptedText.toCharArray()) {
 
       if ( (int)character >= 97 && (int)character <= 122 ) {
           int originalAlphabetPosition = character - 'z';
           int newAlphabetPosition = (originalAlphabetPosition + 25 ) % 26;
           result.append((char) ('z' + newAlphabetPosition));
 
       } else {
           result.append(character);
       }
   }
 
   return new String(result);
}
```
 
 
### Accepted Solution
The default example had implemented StringBuilder class which I thought was the reason for the failed tests. I replaced StringBuilder with Array implementation and the solution passed all the tests. Yay!
 
```java
public static String solution(String x) {
   int strLength = x.length();
   char[] encryptedCharArr = new char[strLength];
 
   for (int i = 0; i < strLength; i++) {
       int character = x.charAt(i);
 
       if ( character >= 97 && character <= 122 ) {
           int originalAlphabetPosition = character - 'z';
           int newAlphabetPosition = (originalAlphabetPosition + 25 ) % 26;
           encryptedCharArr[i]  = (char) ('z' + newAlphabetPosition);
 
       } else {
           encryptedCharArr[i] = (char)character;
       }
   }
 
   return new String(encryptedCharArr);
}
```
 
 
### Further Refactoring, Test Harness
After submitting the solution I reviewed the solution and the recalled overall process. Being a firm believer of `Test Driven Development (TDD)`, I wanted safety to keep the behaviours of the solution the same, I wrote simple `Unit Tests`. The unit tests did not need to be extensive covering all edge cases; neither should have many use cases covered as it had already passed the test cases of Google. I just needed something to preserve what was functional in my local.
 
```java
class CaesarCipherTest {
 
   String result = "wrw blf hvv ozhg mrtsg'h vkrhlwv?";
   String expected = "did you see last night's episode?";
 
   @Test
   void solution() {
       String actual = CaesarCipher.solution(result);
       Assertions.assertEquals(expected, actual);
   }
 
   @Test
   void submittedSolution() {
       String actual = CaesarCipher.submittedSolution(result);
       Assertions.assertEquals(expected, actual);
   }
 
   @Test
   void encrypt() {
       String expected = "wrw blf hvv ozhg mrtsg'h vkrhlwv?";
       String plainText = "did you see last night's episode?";
       result = CaesarCipher.encrypt(plainText);
       Assertions.assertEquals(expected, result);
   }
 
   @Test
   void solnWithArray() {
       Assertions.assertEquals( expected, CaesarCipher.solnWithArray(result) );
   }
 
   @Test
   void solnWithStrBuilder() {
       Assertions.assertEquals(expected, CaesarCipher.solnWithArray(result) );
   }
 
   @Test
   void decrypt() {
       char expected = 'z';
       char result= 'a';
       Assertions.assertEquals( expected , CaesarCipher.decrypt(result) );
   }
}
```
 
Now with the protection of the tests, I refactored the submitted solution.
 
```java
public static String solution(String cipher) {
       int cipherLen = cipher.length();
       char[] decryptedCharArr = new char[cipherLen];
 
       for (int i = 0; i < cipherLen; i++) {
           int character = cipher.charAt(i);
 
           if ( character >= 97 && character <= 122 )
               decryptedCharArr[i]  = (char) ( 'z' - ( ( character + 7) % 26 ));
           else
               decryptedCharArr[i] = (char)character;
       }
 
       return new String(decryptedCharArr);
}
```
 
### Review
`Google FooBar Code Challenge` was fun. Sometimes `the unknown` leads to better results as if there had been clear test case failure outputs, It would not have pushed myself to think and rethink more. On the other hand, I would have found the solution straight forward but problems in real life are also abstract. The constraints and the test cases pushed me to use optimum data structures and algorithms. 
 
Previously, I had an interview with Google in July 2019. It was more of a casual talk I had with a nice lady who wanted to know a bit of me and to see if I fit the available role at a certain location. Unfortunately, it did not work out.
 
I am grateful to both opportunities but I am enjoying this experience more that may be because I'm more of a `code person`.
 
Thank you Google!
 
 
If you code is a better language to you then please find more at [Github](https://github.com/JavaCheatsheet/codechallenge).
 