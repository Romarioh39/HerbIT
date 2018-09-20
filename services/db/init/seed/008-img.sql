insert into slider_images (id, image_id) values
    (1, 'Hi from the backend!!!'),
    (2, 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjukOC6vsjdAhWwFzQIHZvzAYIQjRx6BAgBEAU&url=https%3A%2F%2Fplus.google.com%2F110385097460736686836&psig=AOvVaw0sd2KLIunPprhR-hM7Vhbl&ust=1537495269667804')
on conflict do nothing;
