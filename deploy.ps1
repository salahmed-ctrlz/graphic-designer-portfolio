# Build the project
npm run build

# Create a temporary directory with a shorter path
$tempPath = "C:\temp\gh-pages-deploy"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue $tempPath
New-Item -ItemType Directory -Path $tempPath | Out-Null

# Copy the dist folder to the temporary location
Copy-Item -Path "dist/*" -Destination $tempPath -Recurse

# Initialize git in the temporary directory
Push-Location $tempPath
git init
git checkout -b gh-pages
git add .
git config user.email "deployment@example.com"
git config user.name "GitHub Pages Deployment"
git commit -m "Deploy to GitHub Pages"

# Add the remote and push
git remote add origin https://github.com/salahmed-ctrlz/graphic-designer-portfolio.git
git push -f origin gh-pages

# Clean up
Pop-Location
Remove-Item -Recurse -Force $tempPath 