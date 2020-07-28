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
 
In this post I will share my experience solving the first `Google FooBar Challenge`.

While doing some search on Google, I received an invitation to participate in a code challenge by Google. I had no previous idea about it, frankly never heard of it. I accepted the invitation and I was redirected to [FooBar](https://foobar.withgoogle.com). After log in, a `CLI` with the instructions about the challenge and how to request a challenge was provided. The challenge had to be solved within 2 days.
 
### The Challenge
Decrypt a code where every lowercase letter [a..z] is replaced with the corresponding one in [z..a], while every other character (including uppercase letters and punctuation) is left untouched. That is, 'a' becomes 'z', 'b' becomes 'y', 'c' becomes 'x', etc.  For instance, the word "vmxibkgrlm", when decoded, would become "encryption".
 
__Constraints for the solution:__
- Java 8
- Limited execution time
- Prohibit usage of third-party libraries
- Parallel processing disabled
- Character limit to around 3000 (I don’t remember exactly)
 
### Initial Thoughts
The rough idea I could come up after the analysis was:
- Manipulation of the ASCII value of the letters
- Simple maths, addition/subtraction, on numeric value of letters
 
Since converting this idea into a concrete algorithm was taking longer than expected, I moved to another solution.
 
### First Attempt
The next simplest design for the solution I could come up with consisted of the following data structures:
- `HashMap` to store the encrypted letters and easy access of decrypted letters
- `StringBuilder` to store the deciphered text
-  Use Java 8 new method `String.chars()` API
 
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
 
The implementation provided desired output in the local environment but it failed to pass the tests.
 
### Second Iteration
I reflected back on the constraints and refactored the code to use more primitive data structure:
- Replaced `StringBuilder` with `Character Array`
 
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
 
But again the solution did not pass! At this point I was getting a little bit frustrated because there were no proper errors thrown. The output was just a list of failed tests. I lost interest after around an hour and I went back to my previous preparation method, solving challenges from other sources.
 
### Third Iteration
The next day I went back to the challenge with around 3 hours remaining. To make sure the time spent here would be worthwhile, I did some search to know more about the challenge. Only then I realized that the challenge was invitation only, and was used by Google for recruitment. Those were good enough reasons for me to continue, but then I was seriously running out of time.
 
Then I searched for similar problems and solutions to find answers to these questions:
- How to encrypt a letter by another
- What are the standard encryption algorithms
 
A simple example by [Baeldung](https://www.baeldung.com/java-caesar-cipher) answered my queries.
 
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
 
**“Any fool can know. The point is to understand.” - Albert Einstein**
 
Knowing that standard encryption algorithm used was `Caesar Cipher`, I wanted to understand more that led to [Cryptography](https://github.com/codeanit/til/issues/43), [Cipher](https://github.com/codeanit/til/issues/107) and [more](https://github.com/codeanit/til/issues).
 
Keeping in mind that the time was limited, I skimmed the contents.
 
`A **Cipher** is a method for encrypting a message, intending to make it less readable. **Caesar Cipher** is a substitution cipher that transforms a message by shifting its letters by a given offset.`
 
Baeldung's post also made me realize that understanding of the encryption process was important to decipher. Therefore, based on Baeldung's framework, I created an encryption system that generated the cipher from the challenge.
 
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
 
After generating the exact cipher, It was pretty much easier to write a program to decipher.
 
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
 
I submitted the solution then again it failed.
 
__Time <10mins!__
 
### Accepted Solution
Refactored the code:
- Replaced `StringBuilder` with `Character Array`.
 
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
 
__Yay! All Tests Passed. Time <2mins.__
 
**Solution Submitted.**
 
### Review
The next day I reviewed the solution and recalled the overall process. Phew! It was a close call.
 
I wanted to refactor the submitted code as it was done in a hurry. And prior to refactoring, I wrote `Unit Tests` to make sure that all the methods will work as before. Those tests did not needed to be extensive covering all edge cases; neither should have many use cases, the solution had already passed Google's test cases.
 
Previously, I had an interview with Google in July 2019. It was more of a casual talk I had with a nice lady to see if I fit the available role at a certain location. Unfortunately, it did not work out.
 
I am grateful for both opportunities but I have enjoyed this experience more may be because I'm more of a code person.
 
__Thank you Google!__
 
If code is a better language to you then please find more at [Github](https://github.com/JavaCheatsheet/codechallenge).
