# Install all the node packages
sudo npm install

# We need to install less and you need to run it to compile the less files into
# CSS.
sudo gem install sass
sudo gem install sass-globbing

# Watch the sass files for changes (from the root dir).
sass -r sass-globbing --watch app/:app/

# Add this alias to your bashrc so you can deploy the frontend.
alias deploy_foodme="cd ~/Development/food_me_site/app/; echo 'you will have to kill the following command.'; sass -r sass-globbing --watch ./:./; cd ..;  ./deploy_to_s3;"
