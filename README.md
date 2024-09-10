
# bc_phincon_2
## Langkah-langkah untuk Git:

1. **Inisialisasi Repository**
   - `git init`

2. **Cek Status**
   - `git status` -> Cek status di folder project

3. **Menambah File ke Staging**
   - `git add [nama-file]` -> Menambah file ke staging, yang akan di-commit

4. **Commit File**
   - `git commit -m "[commit message]"` -> Commit file yang akan di-push

5. **Cek URL Repository Online**
   - `git remote -v` -> Untuk mengecek URL repository online

6. **Set Remote URL**
   - `git remote add origin [url-repository]` -> Untuk set remote URL, dipush ke mana

7. **Ganti Remote URL**
   - `git remote set-url origin [new-url]` -> Untuk mengganti set remote URL jika sudah ada URL existing

8. **Push ke Repository Online**
   - `git push`

9. **Push ke Branch Tertentu**
   - `git push origin [nama-branch]` -> Push ke repository dengan nama branch tertentu

10. **Fetch Branch Online**
    - `git fetch` -> Untuk menarik branch online repository ke local repository

11. **Pull ke Repository Online**
    - `git pull`

12. **Pull ke Branch Tertentu**
    - `git pull origin [nama-branch]` -> Pull ke repository dengan nama branch tertentu

13. **Ganti Posisi Branch Aktif**
    - `git switch [nama-branch]` -> Untuk mengganti posisi branch yang aktif

14. **Buat Branch Baru**
    - `git checkout -b [nama-branch]` -> Untuk membuat branch baru berdasarkan referensi branch aktif

15. **Merge Branch**
    - `git merge [nama-branch]` -> Untuk menggabungkan branch aktif ke branch yang dituju

16. **Merge dengan Histori Tidak Terkait**
    - `git merge [nama-branch] --allow-unrelated-histories` -> Dilakukan pertama kali jika tidak ada commit sama sekali di awal
