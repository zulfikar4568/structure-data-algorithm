# Structure Data Algorithm

## Stack
- ### Palindrome
  - Input:
    ```
    racecar
    ```
  - Output:
    ```
    true
    ```
  - **Explanation** </br>
    `racecar` akan di kategorikan sebagai palindrome karena jika di balik akan tetap `racecar`
- ### Stack (First In Last Out)
  - Ilustration:
    ```ts
    In >===\   /===> Out
            | |
            | |
           | a |
            ---
           | b |
            ---
           | c |
            ---
           | d |
            ---
    
    ```
  - Output:
    ```
    peek: c
    pop: c
    peek: b
    size: 2
    ```

## Set
  Sebernarnya fitur Set sudah ada secara default, namun kita akan belajar dari dasar terlebih dahulu. Set adalah data struktur yang mengizinkan kita tambah/ hapus dll data ke dalam container.
  - Input:
    ```ts
    setA = ['a', 'b', 'c', 'd']
    setB = ['a', 'b', 'c', 'd', 'e']
    ```
  - Output:
    ```ts
    difference: e
    intersection: a,b,c,d
    subset: false //Karena e tidak dalam bagian dari setA
    setA.has('a'): true
    //dll. Bisa di cek di program saja
    ```
## Queue (First In First Out)
  - Ilustrasi:
    ```
              ------------------
    a <------- | b | c | d | e | <-------- f
              ------------------
    ```
## Binary Search Tree
  - Ilustrasi:
    ```
                  8  <------------------- (Root and Parent)
                /   \
              3       10 <--------------- Left Child (3) dan Right Child (10)
            /   \        \
          1      6        14 <----------- Siblings (1,6)
               /   \    /
              4     7  13 <-------------- Leaf (4,7,13)
          Left Sub Tree (3, 1, 6) dan Right Sub Tree (10, 14)
    ```