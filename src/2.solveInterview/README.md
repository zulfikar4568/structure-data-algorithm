Terdapat 3 pilar code yang bagus:
1. Readable (Mudah Di baca)
2. Time Complexity (Cepat saat di eksekusi)
3. Space Complexity (Tidak banyak memakan memori)

Apa yang di cari oleh interviewer?
1. Skill Analitik (Bagaimana kita menyelesaikan masalah dan menganalisisnya)
2. Skill Coding (Code kita bagus, Clean, Terorganisasi, Mudah di baca)
3. Skill Pengetahuan (Kita harus tau fundamental tentang pekerjaan yang kita apply)
4. Skill Komunikasi (Apakah personal kita cocok dengan culture yang ada di perusahaan yang kita apply)

Step by step dalam menyelesaikan masalah
1. Ketika interviewer mengajukan pertanyaan, tulis kunci penting nya dan detail nya, tunjukan bagaimana kita mengorganisasi kan nya.
2. Pastikan kembali input dan outputnya seperti apa
3. Pastikan apa yang menjadi nilai dari masalah tersebut atau fokusnya? Time , Space (Memori), etc. Apa tujuan dari masalah yang di berikan
4. Jangan terlalu banyak mengajukan pertanyaan juga, karna dapat menganggu interviewer
5. Mulai dengan pendekatan brute force/naive. Hal pertama selesaikan dengan apa yang ada di pikiran kita terlebih dahulu. Itu akan menunjukan kita dapat berfikir dengan baik dan kritis (Dalam hal ini kita tidak perlu menuliskan kode, kita ucapkan saja).
6. Katakan mengapa pendekatan ini bukan yang terbaik (n^2 atau yang berorder tinggi lainnya)
7. Eksekusi pendekatan kita, tulis misal dalam comments dan lihat bagaimana kita bisa menjabarkan dalam menyelesaikan masalah. Lihat perulangannya, ada bottleneck seperti n^2 atau tidak, atau hal yang tidak di perlukan, apakah sudah sesuai dengan requirement dengan interviewer nya. Bottleneck nya yang mempunyai big O yang paling besar kita harus fokus pada ini.
8. Sebelum coding, lihat kembali step yang akan kita follow.
9. Pecah pecah step2 menjadi bagian kecil.
10. Lalu kita mulai coding sekarang. Pastikan kita sudah mempersiapkannya dan tau apa yang harus di code
11. Pikirkan tentang error, asumsikan orang lain memakai code kita, dan bagaimana orang tersebut aman menggunakan code yang kita tulis. Buat case ketika hasilnya false (opsional)
12. Jangan menggunakan kata - kata yang membingungkan di code kita misal i,j,x dalam variable
13. Test code kita, check jika params, 0, null, undefined dll. Tanyakan kepada interviewer jika terdapat input seperti tersebut apakah kita boleh membuat exception error.
14. Terakhir bicara ke interviewer dimana kita bisa improve code kita, apakah code nya bekerja? Apakah ada pendekatan lain? apakah mudah di baca?
15. Jika interviewer sudah senang, biasanya cukup sampai di sini. kadang terdapat pertanyaan tambahan misalkan bagaimana menghandle jika kita mempunyai memori yang sedikit

Checklist code yang bagus:
- [✅] Dapat berjalan
- [✅] Bagus jika menggunakan data structure
- [✅] DRY / code bersifat re-use
- [✅] Lebih kecil dari O(n^2). Hindari nested loop
- [✅] Low space complexity

Temuan untuk menjawab pertanyaan:
- [✅] Hash map biasanya jawaban untuk mengimprove Time Complexity
- [✅] Jika itu array sorted, gunakan Binary Tree untuk achieve O(log N)
- [✅] Coba sorting input kita
- [✅] Hash table dan precomputed information beberapa cara terbaik untuk mengimprove code kita
- [✅] Time vs Space. Terkadang menyimpan beberapa state di memori dapat membantu meningkatkan time.
- [✅] Jika interviewer memberikan tips/nasihat/dll ikuti saja