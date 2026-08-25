---
layout: blog
title: "Setting up a local Server (Web)"
date: 2026/08/25
time: 2
tags:
  - Ruby
  - Jekyll
  - GitHub Pages
  - Web Development
---
# Overview
This is a simplified guide to setting up a local development server when working with Jekyll on GitHub. My scenario was for my portfolio, but there are other uses cases that this would helpful with. Normally when working with Jekyll on GitHub it tends to be a slow workflow due the page needing to be rebuilt and deployed every time you commit anything. Setting up a local development server solves all of that where you can see live changes on the web upon saving instead of committing.

---
# The worflow
## 1. Install Ruby
First if Ruby isn't installed go to [ruby installer](https://rubyinstaller.org/downloads/) this was where I first tried the newest possible version, but it wasn't compatible with my Jekyll version. Instead, I choose "Ruby+Devkit 3.2.11-1 (x64)" since it had better compatibility and once everything was downloaded a prompt come came to install from several options. For this I choose MSYS2 development toolchain.

## 2. Verify
Once that is done it is good time to check if everything is installed properly by putting this command in your command prompt.
```
ruby -v
gem -v
bundle -v
```

## 3. Gemfile
You might also need to create a ‘Gemfile’ in your files if you don't have one already and remember it doesn't have an extension like most files. If you want to see more, you can read it here: [ruby gems guides](https://guides.rubygems.org). The second line in the 'Gemfile' might not be necessary to you if you’re not using GitHub's supported Jekyll themes.
```html
gem "github-pages", group: :jekyll_plugins
gem "jekyll-remote-theme"
```

## 4. Install Jekyll
Next if you don't have Jekyll installed you run this command in your command prompt.
```
bundle install
```

## 5. Start local server
Once everything is good and you saw no errors in your way run this command in your command prompt as a test.
```
cd C:\Users\apuid\Documents\GitHub\Portfolio
bundle exec jekyll serve
```

Or alternatively you can run this command in your command prompt if you want the browser to automatically refresh upon saving.
```
cd C:\Users\apuid\Documents\GitHub\Portfolio
bundle exec jekyll serve --livereload
```

The Ip address for the local server page: http://127.0.0.1:4000

Notes: This hasn't been tested apart from my personal workstation and some file paths won't match your needs. This guide also won't match to everybody’s needs but could work in similar scenarios to mine. 

---
[Text file I used while researching](LiveServer.txt).

---