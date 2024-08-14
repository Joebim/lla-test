def test_media_library():
    # Open the media library page
    driver.get("URL_of_the_media_library")

    # Upload a character
    upload_element = driver.find_element(By.ID, "upload-character")
    upload_element.send_keys("path/to/your/characterfile.png")

    # List and Preview Characters
    list_button = driver.find_element(By.ID, "list-characters")
    list_button.click()

    preview_button = driver.find_element(By.ID, "preview-character")
    preview_button.click()

    # Edit character details
    edit_button = driver.find_element(By.ID, "edit-character")
    edit_button.click()
    edit_input = driver.find_element(By.ID, "character-name")
    edit_input.clear()
    edit_input.send_keys("New Character Name")
    save_button = driver.find_element(By.ID, "save-character")
    save_button.click()

    print("Media Library characters collection test passed.")
