from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

url = "https://bulldozer-php.teams.hng.tech/faqs"
expected_titles = [
    "HNG Boilerplate",
    "Frequently asked question",
    "Questions you might ask about our product"
]

browser = webdriver.Chrome()

for i in range(5):
    browser.get(url)
    browser.maximize_window()

    title = browser.title
    print(f"Attempt {i + 1}: {title}")

    if any(expected_title in title for expected_title in expected_titles):
        print(f"Title is as expected on attempt {i + 1}")
    else:
        print(f"Title did not match expected values on attempt {i + 1}")

    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    print("Scrolled down the page.")
    time.sleep(5)

    browser.execute_script("window.scrollTo(0, 0);")
    print("Scrolled up the page.")
    time.sleep(5)

    dropdown_elements = browser.find_elements(By.CSS_SELECTOR, '[data-state]')
    for dropdown in dropdown_elements:
        current_state = dropdown.get_attribute("data-state")
        if current_state == "closed":
            print("Opening dropdown.")
            browser.execute_script("arguments[0].scrollIntoView();", dropdown)
            browser.execute_script("arguments[0].click();", dropdown)
            time.sleep(2)

    email_input = browser.find_element(By.NAME, 'email')
    name_input = browser.find_element(By.NAME, 'name')
    message_input = browser.find_element(By.NAME, 'message')
    submit_button = browser.find_element(By.CSS_SELECTOR, '[type="submit"]')

    email_input.send_keys("therayo@gmail.com")
    name_input.send_keys("rayo test")
    message_input.send_keys("just testing")

    print("Filled out the form.")

    submit_button.click()
    print("Form submitted.")

    try:
        success_message = WebDriverWait(browser, 10).until(
            EC.presence_of_element_located(
                (By.XPATH, "//*[contains(text(), 'Your question has been submitted successfully')]"))
        )
        print("Success message found: Your question has been submitted successfully")
    except:
        print("Success message not found within the given time.")

    time.sleep(20)

browser.quit()
