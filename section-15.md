# §15. Inferences from the definition of an integral

*Printed pages 22–24 (scans 0050–0052). Mathematical notation has been transcribed as TeX; the wording follows the scans, with line wrapping normalized.*

Some inferences can be made from the definition of an integral.

## (I.)

*The integral along any path from $a$ to $z$ passing through a point $\zeta$ is the sum of the integrals from $a$ to $\zeta$ and from $\zeta$ to $z$ along the same path.* Analytically, this is expressed by the equation

$$
\int_a^z f(z)\,dz=\int_a^\zeta f(z)\,dz+\int_\zeta^z f(z)\,dz,
$$

the paths on the right-hand side combining to form the path on the left.

## (II.)

*When the path is described in the reverse direction, the sign of the integral is changed*: that is,

$$
\int_a^z f(z)\,dz=-\int_z^a f(z)\,dz,
$$

the curve of variation between $a$ and $z$ being the same.

## (III.)

*The integral of the sum of a finite number of terms is equal to the sum of the integrals of the separate terms, the path of integration being the same for all.*

## (IV.)

*If a function $f(z)$ be finite and continuous along any finite line between two points $a$ and $z$, the integral $\int_a^z f(z)\,dz$ is finite.*

Let $I$ denote the integral, so that we have $I$ as the limit of

$$
\sum_{r=0}^n (z_{r+1}-z_r)f(z_r);
$$

hence

$$
\begin{aligned}
|I|
&=\text{limit of }\left|\sum_{r=0}^n(z_{r+1}-z_r)f(z_r)\right|\\
&<\text{limit of }\sum_{r=0}^n|z_{r+1}-z_r|\,|f(z_r)|.
\end{aligned}
$$

Because $f(z)$ is finite and continuous, its modulus is finite and therefore must have a superior limit, say $M$, for points on the line. Thus

$$
|f(z_r)|\leq M,
$$

so that

$$
\begin{aligned}
|I|&<\text{limit of }M\sum_{r=0}^n|z_{r+1}-z_r|\\
&<MS,
\end{aligned}
$$

where $S$ is the finite length of the path of integration. Hence the modulus of the integral is finite; the integral itself is therefore finite.

No limitation has been assigned to the path, except finiteness in length; the proposition is still true when the curve is a closed curve of finite length.

Hermite and Darboux have given an expression for the integral which leads to the same result. We have as above

$$
I=\int_a^z f(z)\,dz,
$$

and

$$
\begin{aligned}
|I|&<\left|\int_a^z |f(z)|\,|dz|\right|\\
&=\theta\int_a^z |f(z)|\,|dz|,
\end{aligned}
$$

where $\theta$ is a real positive quantity less than unity. The last integral involves only real variables; hence[^mean-value] for some point $\xi$ lying between $a$ and $z$, we have

$$
\begin{aligned}
\int_a^z |f(z)|\,|dz|&=|f(\xi)|\int_a^z|dz|\\
&=S|f(\xi)|,
\end{aligned}
$$

so that

$$
|I|=\theta S|f(\xi)|.
$$

It therefore follows that there is some argument $\alpha$ such that, if $\lambda=\theta e^{i\alpha}$,

$$
I=\lambda Sf(\xi).
$$

This form proves the finiteness of the integral; and the result is the generalisation[^hermite] to complex variables of the theorem of mean value just quoted for real variables.

## (V.)

*When a function is expressed as a uniformly converging series, the integral of the function along any path of finite length is the sum of the integrals of the terms of the series along the same path, provided that path lies within the circle of convergence of the series*:—a result, which is an extension of (III.) above.

Let $u_0+u_1+u_2+\dots$ be the converging series; take

$$
f(z)=u_0+u_1+\dots+u_n+R,
$$

where $|R|$ can be made infinitesimally small with indefinite increase of $n$, because the series converges uniformly. Then by (III.), or immediately from the definition of the integral, we have

$$
\int_a^z f(z)\,dz
=\int_a^z u_0\,dz+\int_a^z u_1\,dz+\dots+\int_a^z u_n\,dz+\int_a^z R\,dz,
$$

the path of integration being the same for all the integrals. Hence, if

$$
\Theta=\int_a^z f(z)\,dz-\sum_{m=0}^n\int_a^z u_m\,dz,
$$

we have

$$
\Theta=\int_a^z R\,dz.
$$

Let $R'$ be the greatest value of $|R|$ for points in the path of integration from $a$ to $z$, and let $S$ be the length of this path, so that $S$ is finite; then, by (IV.),

$$
|\Theta|<SR'.
$$

Now $S$ is finite; and, as $n$ is increased indefinitely, the quantity $R'$ tends towards zero as a limit for all points within the circle of convergence and therefore for all points on the path of integration provided that the path lie within the circle of convergence. When this proviso is satisfied, $|\Theta|$ becomes infinitesimally small and therefore also $\Theta$ becomes infinitesimally small, with indefinite increase of $n$. Hence, under the conditions stated in the enunciation, we have

$$
\int_a^z f(z)\,dz-\sum_{m=0}^{\infty}\int_a^z u_m\,dz=0,
$$

which proves the proposition.

[^mean-value]: By what is usually called the “First theorem of mean value,” in the integral calculus; for a proof, see Carslaw's *Fourier's series and integrals*, § 39.
[^hermite]: Hermite, *Cours à la faculté des sciences de Paris* (4ème éd., 1891), p. 59, where the reference to Darboux is given.
