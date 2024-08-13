def test_create_manage_quests_scenes():
    # Open the quests management page
    driver.get("URL_of_the_quests_page")

    # Create a new questFeatures
    create_button = driver.find_element(By.ID, "create-quest")
    create_button.click()
    quest_name = driver.find_element(By.ID, "quest-name")
    quest_name.send_keys("New Quest")
    save_quest = driver.find_element(By.ID, "save-quest")
    save_quest.click()

    # Add scenes to the quest
    add_scene_button = driver.find_element(By.ID, "add-scene")
    add_scene_button.click()
    scene_name = driver.find_element(By.ID, "scene-name")
    scene_name.send_keys("New Scene")
    save_scene = driver.find_element(By.ID, "save-scene")
    save_scene.click()

    print("Create/Manage Quests and Scenes test passed.")
