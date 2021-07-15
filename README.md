# angular-group-exercise

## The Mission

Second Angular exercise. Remaking the basic Angular form and adding some personal touches. Group exercise by Valentina Corak and Aaron Den Hond
Our project is about animal data in our ZOO. We will map all animals and take their picture when they arrive. 😁 

AARON: 
- form in html
-form validation
  - requirements
  - binding the data to the form
  
VALENTINA
- server side

### Must-have features

- image,
- name,
  - age,
- animal species,
-animal class,
  - favourite food

Error reporting, give some visual feedback to the user if they put something wrong in the inputs.

Form validation

A Animal list, do this by sending a GET request to your local node server and save the data

A POST request to add a animal to our animal data base.

### Steps

CREATED BOILER PLATE OF OUR PROJECT:

1. Aaron made repository and Valentina cloned this repository locally
2. We checked if we have node.js and npm - yes we do
  - node: <code>node -v</code> or <code>node -version</code>
  - npm: <code>npm -v</code> or <code>npm -version</code>
3. Install the Angular cli with <code>npm install -g @angular/cli</code> and check afterwards if you have it with <code>ng -v</code>
4. Navigate to the root of your clone of this repository in the terminal and enter the command <code>ng new project-name</code>. You should now have 2 folders called "server", your node API, and "project-name", your angular app.
5. Go inside of the "project-name" folder and run the command <code>ng serve --port 4500</code>. You can now check out your angular app on <code>localhost:4500</code>.
6. In your editor, navigate to <code>project-name/src/app</code>. We have:
  - The template, app.component.html
  - The component, app.component.ts.


STARTING WITH FORM HTML STRUCTURE AND APP COMPONENT

7. Empty the "AppComponent" class and the template. Inside of the AppComponent class- logic and in the template- the html with Bootstraap
8. In the HTML file, added a form with the required inputs (image, name, species, class, favourite food ) 
9. Dropdown menu??


BINDING THE DATA TO FORM

10. Now we had to bind the data to our form
  - In app.module.ts, import the FormsModule from @angular/forms. Also add it to the imports array.
  - Add <code>#formName="ngForm"</code> to your form. This will make "formName" a variable which contains all the data of the form in realtime.
  - Also add <code>#inputName="ngModel"</code> to every input tag.
  - all your inputs have a name attribute and also put <code>ngModel</code> inside of each input.
  - Test if it worked by adding <code>{{ formName.value | json }}</code> at the top of your html. (values should update automatically).

  - add a new "friend" model to our project, in the root of our angular app in the terminal, run the command <code>ng generate class Friend</code>.
  - in friend.ts file and added a constructor to the class. In there add the corresponding properties and typehint them.
  - In component class, instantiate the friendModel through the friend class with all the properties set to null. (need to import the Friend class.)
  - in HTML, change the ngModel of your inputs to be like this: <code>[(ngModel)]="friendModel.propertyName"</code>.
  
- TEST: top of your HTML and change <code>{{ formName.value | json }}</code> to <code>{{ friendModel | json }}</code>. (nothing really changed but data should be binded to the friend model.)

VALIDATION

12. Now we need to display when a field is invalid to the user.
  - Add the required property to all inputs
  - Make a class- a red border color or message
  - To conditionally add that class to your input, add <code>[class.yourClassName]="property.invalid"</code>. This means the class "yourClassName" will be applied to the input when a specific property is invalid.
    - Have no numbers in names
    - Have no special code characters allowed anywhere if they're not needed.
13. disable the button when the form is not valid. <code>formName.form.invalid</code>


SUBMITTING THE DATA TO THE SERVER




