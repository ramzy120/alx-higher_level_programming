#!/bin/bash
# PUT METHOD is allowed, we must follow redirections, we should come from AlxSchool and our userid should be user_id = 98
curl -sLX PUT -H "orgiin: AlxSchool" -d "user_id=98" 0.0.0.0:5000/catch_me
