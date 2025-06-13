# Gunakan base image Nginx yang ringan 
FROM nginx:alpine

# Salin file HTML, CSS, dan JavaScript ke direktori default Nginx 
COPY main/index.html /usr/share/nginx/html/
COPY main/Style.css /usr/share/nginx/html/
COPY main/script.js /usr/share/nginx/html/


# Expose port 80 
EXPOSE 80

# Perintah default untuk menjalankan Nginx 
CMD ["nginx", "-g", "daemon off;"]