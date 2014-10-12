
USER = alexd075
HOST = alexdantas.net
PORT = 2222
LOCAL_PATH  = .
REMOTE_PATH = ~/public_html/tmp/

# Put `--exclude` before each file or folder
IGNORE = --exclude .git         \
         --exclude .gitignore   \
         --exclude Makefile     \
         --exclude node_modules

# Creates a server to preview local changes
all:
	# Initializing server on "localhost:27016"...
	ruby -run -e httpd . -p 27016

# Synchronizes local changes to the website
run: zip
	# Synchronizing "$(LOCAL_PATH)" to "$(HOST)/$(REMOTE_PATH)"...
	rsync -avze 'ssh -p $(PORT)' $(IGNORE) $(LOCAL_PATH) $(USER)@$(HOST):$(REMOTE_PATH)

# Creates a zip file with all the content
zip:
	zip -r doodlemeat.zip *

