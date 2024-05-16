import os

def generate_image_tags(folder_path):
    with open('image_tags.txt', 'w') as file:
        for i, filename in enumerate(os.listdir(folder_path)):
            if filename.endswith(".jpg") or filename.endswith(".png"):  # Include both jpg and png files
                image_path = os.path.join(folder_path, filename)
                file.write(f'<img src="{image_path}">\n')

folder_path = "/Users/Justin/Desktop/oxact4pal/assets/gallery"  # Specify the folder path relative to the script's location
generate_image_tags(folder_path)
