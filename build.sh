#!/usr/bin/env bash

PASSM="$HOME/.ramdisk/.password_manager"
if [[ "$PWD" =~ mute-youtube-ads$ ]] && [[ -f "$PASSM" ]]; then
	rsyncWeb () {
		local SSHHOME=$(bash "$PASSM" "binero-ssh-path")
		local SSHUSER=$(bash "$PASSM" "binero-ssh-user")
		local SSHURL=$(bash "$PASSM" "binero-ssh-url")
		rsync --verbose --progress --stats --times --recursive --perms --delete --copy-links \
			--exclude ".*" --exclude "build.sh" --exclude "*sublime*" -e ssh "$PWD/" \
			"$SSHUSER""@""$SSHURL"":""$SSHHOME""/elundmark.se/public_html/_files/js/mute-youtube-ads/"
	}
	gitCommit () {
		echo -n "Version release number?: "
		read gitversionnumber
		echo -n "Enter a description for the commit: "
		read gitcommitmsg
		if [[ "$gitversionnumber" =~ [0-9.]+ ]] ; then
			gitcommitmsg="v$gitversionnumber $gitcommitmsg"
		fi
		read -p "Is '""$gitcommitmsg""' correct? (y/n): " CONT
		if [[ $? -eq 0 ]] && [[ "$CONT" == "y" || ! $CONT || "$CONT" = "" ]] ; then
			echo "\$ git add . --all; git commit -am ""$gitcommitmsg""; git push origin master"
			git add --all .
			git commit -am "$gitcommitmsg"
			git push origin master
			if [[ "$gitversionnumber" =~ [0-9.]+ ]] ; then
				git tag "$gitversionnumber"
				git push --tags origin master
			fi
		else
			echo "Exiting..."
			exit 1
		fi
	}
	reminder=$'\n'"Did you remember to update all version info?"$'\n'
	if [[ "$1" ]] && [[ ! "$1" =~ ^all$ ]] ; then
		for str_arg in $* ; do
			if [[ "$str_arg" = "git" ]] ; then
				gitCommit
			fi
			if [[ "$str_arg" = "sftp" ]] || [[ "$str_arg" = "upload" ]] ; then
				rsyncWeb
			fi
		done
		echo "$reminder"
		sleep 2
		exit 0
	elif [[ "$1" ]] && [[ "$1" = "all" ]] || [[ "$1" = "publish" ]] ; then
		gitCommit
		rsyncWeb
		echo "$reminder"
		sleep 2
		exit 0
	else
		echo "Missing commandline argument[s]"
		exit 1
	fi
else
	exit 1
fi