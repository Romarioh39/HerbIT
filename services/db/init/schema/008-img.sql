create table if exists slider_images 
(
      id integer primary key not null,
      image_id text
);
grant select, insert, update, delete on images to project_app;
grant select on table slider_images to project_read;