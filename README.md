# bc_phincon_2

Langkah-langkah untuk git :

- git init
- git status -> Cek Status di folder project
- git add namafile -> menambah file ke stagging, yang akan di commit
- git commit -m [commit message] -> Commit file yang akan di push
- git remote -v -> untuk mengecek url repository online
- git remote add origin [url-repository] -> untuk set remote url nya, dipush kemana
- git remote set-url origin new.git.url/here -> untuk mengganti set remote url jika sudah ada url existing
- git push -> untuk push ke repository online
- git push origin [nama-branch] -> Push ke repository dengan nama branch tertentu
- git fetch -> untuk menarik branch online repository ke local repository
- git pull -> pull ke repository online
- git pull origin [nama-branch] -> Pull ke repository dengan nama branch tertentu
- git switch [nama-branch] -> untuk mengganti posisi branch yang aktif
- git checkout -b [nama-branch] -> untuk membuat branch baru berdasarkan referensi aktif branch
- git merge [nama-branch] -> untuk menggabungkan aktif branch ke brach yang dituju
- git merge [nama-branch] --allow-unrelated-histories -> dilakukan pertama kali jika tidak ada sama sekali commitan di awal
