
//Q1-Write  afunction to reverse a string in javascript

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// let revString=reverseString('hello');
// console.log(revString);




//Q2-Implement an algorithm to check if two strings are anagrams of each other (contain the same characters with the same frequency)

// function isAnagram(s, t) {
//     if(s.length!==t.length)
//     {
//         return false;
//     }
//     const map1={};
//     const map2={};

//     for(let i=0;i<s.length;i++)
//     {
//         let char1=s[i];
//         map1[char1]=(map1[char1] || 0)+1;

//          let char2=t[i];
//         map2[char2]=(map2[char2] || 0)+1;
//     }

//        for(let i=0;i<s.length;i++)
//     {
//        if(map1[s[i]]!=map2[s[i]])
//        return false;
//     }
//     return true;
// };

// console.log(isAnagram("anagram", "nagaram") );
// console.log(isAnagram("Ganesh", "Patel") );

//Q-3 Array Intersection: Given two arrays, write a function to find their intersection (common elements).
// function intersection(arr1, arr2) {
//     const result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         const current = arr1[i];
//         if (arr2.includes(current) && !result.includes(current)) {
//             result.push(current);
//         }
//     }

//     return result;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];
// console.log(intersection(arr1, arr2)); 





//Q-4 String Palindrome: Create a function to check if a given string is a palindrome.. 
//(reads the same forwards and backwards) while ignoring non-alphanumeric characters.


// function checkPalindrome(string) {

//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const value = checkPalindrome("madam");

// console.log(value);



//Q-5 Array Rotation: Implement a function to rotate an array to the right by a specified number of positions.
// function reverse(nums, start, end) {
//     while (start < end) {
//         [nums[start], nums[end]] = [nums[end], nums[start]];
//         start++;
//         end--;
//     }
// }
// function rotate(nums, k) {
//     const n = nums.length;
//     k %= n;
    
//     reverse(nums, 0, n - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, n - 1);
// }
// let arr = [1, 2, 3, 4, 5];
// rotate(arr,3);
// console.log(arr);




//Q-6   String Compression: Write a function to perform basic string compression using the counts of repeated characters. 
//For example, "aabcccccaaa" would become "a2b1c5a3."



// function Compressedstr(str){
//   let charCount = {};
//   for(char of str){
//     if(charCount[char]){
//       charCount[char]++;
//     }else{
//       charCount[char] = 1;
//     }
//   }

//   let compressedStr = '';
//   for(let key in charCount){
//     compressedStr += key + charCount[key];
//   }
//   return compressedStr;
  
// }
// let str="waddakamanna";
// console.log(Compressedstr(str));


//Q-6 Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.

// function twoSum(arr, target) {
//     arr.sort((a, b) => a - b);
//     const result = [];

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         const sum = arr[left] + arr[right];
//         if (sum === target) {
//             result.push([arr[left], arr[right]]);
//             left++;
//             right--;
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return result;
// }

// const res = twoSum([3, 5, 2, -4, 8, 11], 7);      
// console.log(res);


//Q-7  Write an algorithm to find the length of the longest substring without repeating characters in a given string.


// function lengthOfLongestSubstring(s) {
//     const map = new Map();
//     let maxLength = 0;
//     let start = 0;
  
//     for (let end = 0; end < s.length; end++) {
//       const char = s[end];
//       if (map.has(char) && map.get(char) >= start) {
//         start = map.get(char) + 1;
//       }
//       map.set(char, end);
//       maxLength = Math.max(maxLength, end - start + 1);
//     }
  
//     return maxLength;
//   }
//   const inputString = "abcdesabcbb";
//   console.log(lengthOfLongestSubstring(inputString)); 

function Double(arr, doubleFn) {
    return arr.map(doubleFn);
}
const numbers = [1, 2, 3, 4, 5];
function double(num) {
    return num * 2;
}
const res = Double(numbers, double);
console.log(res);

  