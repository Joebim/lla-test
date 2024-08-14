from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.maximize_window()

driver.get("")



    audio_tab = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            (By.XPATH,)
    )
    assert audio_tab.is_displayed()
    print("")


    mic_status_label = driver.find_element(By.XPATH, )
    mic_toggle = driver.find_element(By.XPATH,
                                     )
    assert mic_status_label.is_displayed() and mic_toggle.is_displayed()
    print("Microphone Status label and toggle are displayed correctly.")


    audio_preferences_label = driver.find_element(By.XPATH, )
    assert audio_preferences_label.is_displayed()
    print("Audio Preferences section is displayed correctly.")


    music_toggle = driver.find_element(By.XPATH,
                                       )
    sound_effects_toggle = driver.find_element(By.XPATH,
                                               )
    ambient_sound_toggle = driver.find_element(By.XPATH,
                                               )
    assert music_toggle.is_displayed() and sound_effects_toggle.is_displayed() and ambient_sound_toggle.is_displayed()
    print("Music, Sound effects, and Ambient sound toggles are displayed correctly.")

    # Verify the presence of "Notification Type" dropdown
    notification_type_label = driver.find_element(By.XPATH, )
    notification_type_dropdown = driver.find_element(By.XPATH,
                                                     )
    assert notification_type_label.is_displayed() and notification_type_dropdown.is_displayed()
    print("Notification Type label and dropdown are displayed correctly.")

except Exception as e:
    print("Test failed:", e)
finally:
    # Close the browser
    driver.quit()