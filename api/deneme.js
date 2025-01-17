import bcrypt from 'bcrypt';

const hash = '$2b$10$08OceFGf6K/K9iAKhmX5f.zwBSa1rDY4jIfslJu2MKNZhoRyTYvc2'; // Veritabanındaki hash
const plainPassword = 'kullaniciGirisiSifresi'; // Giriş sırasında gelen şifre

bcrypt.compare(plainPassword, hash).then((isMatch) => {
  console.log('Password match:', isMatch);
});