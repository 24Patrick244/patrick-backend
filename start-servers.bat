@echo off
echo Starting Patrick Furnitures Payment System...
echo.

echo Installing dependencies...
npm install

echo.
echo Starting both servers...
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.

npm run dev

pause 