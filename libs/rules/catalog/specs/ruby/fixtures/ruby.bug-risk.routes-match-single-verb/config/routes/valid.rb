# Using specific verb helper
get 'path', to: 'pages#show'

# match with multiple verbs — OK
match 'path', to: 'pages#show', via: [:get, :post]

# match with via: :all — OK
match 'path', to: 'pages#show', via: :all
