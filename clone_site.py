#!/usr/bin/env python3
import requests
import os
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import time

def download_site():
    base_url = "https://www.salvagereseller.com"
    visited_urls = set()
    
    # Create directory for the cloned site
    os.makedirs("salvagereseller_clone", exist_ok=True)
    
    # Pages to download
    pages_to_download = [
        "/",
        "/cars-for-sale/auction/AB-EDMONTON",
        "/about",
        "/contact",
        "/how-it-works",
        "/services"
    ]
    
    for page in pages_to_download:
        url = urljoin(base_url, page)
        if url in visited_urls:
            continue
            
        visited_urls.add(url)
        print(f"Downloading: {url}")
        
        try:
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            
            # Parse the URL to get the file path
            parsed_url = urlparse(url)
            path = parsed_url.path
            
            if path == "/" or path == "":
                file_path = "salvagereseller_clone/index.html"
            else:
                # Remove leading slash and replace with underscores
                file_path = f"salvagereseller_clone/{path.strip('/').replace('/', '_')}.html"
            
            # Create directory if it doesn't exist
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            
            # Save the HTML content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(response.text)
            
            print(f"Saved: {file_path}")
            
            # Parse HTML to find CSS and JS files
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Download CSS files
            for link in soup.find_all('link', rel='stylesheet'):
                css_url = link.get('href')
                if css_url:
                    css_url = urljoin(base_url, css_url)
                    download_asset(css_url, "salvagereseller_clone/css/")
            
            # Download JS files
            for script in soup.find_all('script', src=True):
                js_url = script.get('src')
                if js_url:
                    js_url = urljoin(base_url, js_url)
                    download_asset(js_url, "salvagereseller_clone/js/")
            
            # Download images
            for img in soup.find_all('img', src=True):
                img_url = img.get('src')
                if img_url:
                    img_url = urljoin(base_url, img_url)
                    download_asset(img_url, "salvagereseller_clone/images/")
            
            time.sleep(1)  # Be respectful to the server
            
        except Exception as e:
            print(f"Error downloading {url}: {e}")
            continue

def download_asset(url, local_dir):
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Create directory
        os.makedirs(local_dir, exist_ok=True)
        
        # Get filename from URL
        filename = os.path.basename(urlparse(url).path)
        if not filename:
            filename = "asset.html"
        
        # Save file
        file_path = os.path.join(local_dir, filename)
        with open(file_path, 'wb') as f:
            f.write(response.content)
        
        print(f"Downloaded asset: {file_path}")
        
    except Exception as e:
        print(f"Error downloading asset {url}: {e}")

if __name__ == "__main__":
    download_site()
    print("Site cloning completed!")
