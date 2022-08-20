# Structure Data Algorithm

- [Big O Notation](./src/1.bigONotation)
- [Tips Solve Problem](./src/2.solveInterview)

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
  - Penjelasan: </br>
      - Enqueue digunakan untuk insert data di akhir element
      - Dequeue digunakan untuk mengeluarkan data pada element terakhir
      - Size untuk mengetahui panjang queue
      - isEmpty digunakan untuk mengecek apakah data kosong
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
  - Penjelasan:
    - 1 Buah node memiliki 2 child (left node dan right node) dan memiliki 1 buah data
    - Add untuk menambahkan data ke node, dan data akan dimasukan secara otomatis, jika nilai nya lebih kecil dari nilai node itu sendiri maka akan di masukan ke kiri. jika lebih besar akan dimasukan ke node kanan.
    - Find Untuk mencari node yang menyimpan data yang akan kita cari
    - FindMin digunakan untuk mencari nilai terkecil
    - FindMax digunakan untuk mencari nilai terbesar
    - remove digunakan untuk menghapus yang menyimpan data dengan parameter yang akan kita hapus.
    - FindMinHeight dan FindMaxHeight digunakan untuk mengetahui tinggi dari node.

[MindMap](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)