curl "https://mysterious-wildwood-08920.herokuapp.com/beers" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "beer": {
      "brand": "'"${BRAND}"'",
      "name": "'"${NAME}"'",
      "style": "'"${STYLE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
