@extends('layout')
<body>
    <h1>Login</h1>

    <form method="POST" action="{{ url('login') }}">
        {{ csrf_field() }}
        
        <div>
            <input type="text" name="username" placeholder="Username">
        </div>
        <div>
            <input type="password" name="password" placeholder="Password">
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
        @if ($errors->any())
            <div class="notification">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    </form>
</body>
</html>