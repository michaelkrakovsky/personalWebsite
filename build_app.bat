cd C:\Users\micha\Documents\GitHub\personalWebsite
call ng build
cp C:\Users\micha\Documents\GitHub\personalWebsite\dist\personalWebsite1\* C:\Users\micha\Documents\GitHub\Personal_Website_Build\
cd C:\Users\micha\Documents\GitHub\Personal_Website_Build
git add .
git commit -m "New Build"
git push
