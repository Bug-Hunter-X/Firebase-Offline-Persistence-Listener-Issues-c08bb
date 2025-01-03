The Firebase SDKs sometimes exhibit unexpected behavior when dealing with offline data persistence and network changes.  For example, a listener might not immediately reflect updates that occur while the app is offline, even after the device regains connectivity. This can lead to stale data being presented to the user.