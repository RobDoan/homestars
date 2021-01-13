# Home Stars Code challenger


# What I can improve if I have more time

- **DRY**:
    - `check_authorization` method
    
- Data Consistency. When we delete a user, we only soft delete that user.
Otherwise, the system can not find created user, and his messages.
If we set `dependencies: destroy` for channels, it may cause problem: other users will lost chat history.
    
- Move `PunditUser` to a class rather than user Struct inside Controller, it's hard and seems not correct to put there

# TODO

1. As a consumer of the API, I can persist my chat messages
2. As a consumer of the API, I can persist messages in specific channels I join.
3. As a consumer of the API, I can see the list of all the available channels
4. As a consumer of the API, I can receive gif suggestions
5. As a consumer of the API, I can look up other users and channels
6. As a consumer of the API, I can see chat statistics of users and channels
