# Naming Convention and Folder Structure

## Namign Convention
### Kotlin Files
- lower camelcase

### Kotlin Variables
- lower camelcase

### XML Names
- starts with type name
    - activity_<ACTIVITY NAME>.xml - for all activities
    - dialog_<DIALOG NAME>.xml - for all custom dialogs
    - row_<LIST_NAME>.xml - for custom row for listview
    - fragment_<FRAGMENT_NAME>.xml - for all fragmentsactivity_XXX.xml
- lower case
- words divided by "_"

### XML Components
- components for an activity must start with the activity name.
- component should have a prefix and short name like btn for Button
- name for login activity component should be like following.
    - activity_login_btn_login
    - activity_login_et_username
    - activity_login_et_password
    
Short name of major components:
|Name           |short  |
|---            |---    |
|Button         |btn    |
|EditText       |et     |
|TextView       |tv     |
|ProgressBar    |pb     |
|Checkbox       |chk    |
|RadioButton    |rb     |
|ToggleButton   |tb     |
|Spinner        |spn    |
|Menu           |mnu    |
|ListView       |lv     |
|GalleryView    |gv     |
|LinearLayout   |ll     |
|RelativeLayout |rl     |
