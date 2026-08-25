# §20. Cauchy's integral formula and simple poles

*Printed pages 31–34 (scans 0059–0062). Mathematical notation has been transcribed as TeX; the wording follows the scans, with line wrapping normalized.*

*Let $f(z)$ denote a function which is holomorphic over any region in the $z$-plane, and let $a$ denote any point within that region; then*

$$
\frac{1}{2\pi i}\int\frac{f(z)}{z-a}\,dz=f(a),
$$

*the integral being taken positively round the whole boundary of the region.*

With $a$ as centre and a very small radius $\rho$, describe a circle $C$, which will be assumed to lie wholly within the region; this assumption is justifiable because the point $a$ lies within the region. Because $f(z)$ is holomorphic over the assigned region, the function $f(z)/(z-a)$ is holomorphic over the whole of the region excluded by the small circle $C$. Hence, by Corollary II. of §19, we have

$$
\int_B\frac{f(z)}{z-a}\,dz=\int_C\frac{f(z)}{z-a}\,dz,
$$

the notation implying that the integrations are taken positively round the whole boundary $B$ and round the circumference of $C$ respectively.

For points on the circle $C$, let $z-a=\rho e^{\theta i}$, so that $\theta$ is the variable for the circumference and its range is from $0$ to $2\pi$; then we have

$$
\frac{dz}{z-a}=i\,d\theta.
$$

Along the circle $f(z)=f(a+\rho e^{\theta i})$; the quantity $\rho$ is very small and $f(z)$ is finite and continuous over the whole of the region, so that $f(a+\rho e^{\theta i})$ differs from $f(a)$ only by a quantity which vanishes with $\rho$. Let this difference be $\epsilon$, which is a continuous small quantity; thus $|\epsilon|$ is a small quantity which, for every point on the circumference of $C$, vanishes with $\rho$. Then

$$
\begin{aligned}
\int_C\frac{f(z)}{z-a}\,dz
&=i\int_0^{2\pi}\{f(a)+\epsilon\}\,d\theta\\
&=2\pi i f(a)+i\int_0^{2\pi}\epsilon\,d\theta.
\end{aligned}
$$

If $E$ denote the value of the integral on the right-hand side, and $\eta$ the greatest value of the modulus of $\epsilon$ along the circle, we have, as in §15,

$$
\begin{aligned}
|E|&<\int_0^{2\pi}|\epsilon|\,d\theta\\
&<\int_0^{2\pi}\eta\,d\theta\\
&<2\pi\eta.
\end{aligned}
$$

Now let the radius of the circle diminish to zero. Then $\eta$ also diminishes to zero and therefore $|E|$, necessarily positive, becomes less than any finite quantity however small, that is, $E$ is itself zero; and thus we have

$$
\int_C\frac{f(z)}{z-a}\,dz=2\pi i f(a),
$$

which proves the theorem.

When $a$ is not a zero of $f(z)$, this result is the simplest case of the integral of a meromorphic function. The subject of integration is $f(z)/(z-a)$, a function which is monogenic and uniform throughout the region and which, everywhere except at $z=a$, is finite and continuous; moreover, $z=a$ is a pole, because in the immediate vicinity of $a$ the reciprocal of the subject of integration, viz. $(z-a)/f(z)$, is holomorphic.

The theorem may therefore be expressed as follows:—

*If $g(z)$ be a meromorphic function, which in the vicinity of $a$ can be expressed in the form $f(z)/(z-a)$ where $f(a)$ is not zero, and which at all other points in a region enclosing $a$ is holomorphic, then*

$$
\frac{1}{2\pi i}\int g(z)\,dz
=\text{limit of }(z-a)g(z)\text{ when }z=a,
$$

*the integral being taken round a curve in the region enclosing the point $a$.*

The pole $a$ of the function $g(z)$ is said to be simple, or of the first order, or of multiplicity unity.

## Corollary

The more general case of a meromorphic function with a finite number of poles can easily be deduced. Let these be $a_1,\ldots,a_n$, each assumed to be simple; and let

$$
G(z)=(z-a_1)(z-a_2)\ldots(z-a_n).
$$

Let $f(z)$ be a holomorphic function within a region of the $z$-plane bounded by a simple contour enclosing the $n$ points $a_1,a_2,\ldots,a_n$, no one of which is a zero of $f(z)$. Then since

$$
\frac{1}{G(z)}=\sum_{r=1}^n\frac{1}{G'(a_r)}\frac{1}{z-a_r},
$$

we have

$$
\frac{f(z)}{G(z)}=\sum_{r=1}^n\frac{1}{G'(a_r)}\frac{f(z)}{z-a_r}.
$$

We therefore have

$$
\int\frac{f(z)}{G(z)}\,dz
=\sum_{r=1}^n\frac{1}{G'(a_r)}\int\frac{f(z)}{z-a_r}\,dz,
$$

each integral being taken round the boundary. But the preceding proposition gives

$$
\int\frac{f(z)}{z-a_r}\,dz=2\pi i f(a_r),
$$

because $f(z)$ is holomorphic over the whole region included in the contour; and therefore

$$
\int\frac{f(z)}{G(z)}\,dz
=2\pi i\sum_{r=1}^n\frac{f(a_r)}{G'(a_r)},
$$

the integral on the left-hand side being taken in the positive direction.[^1]

The result just obtained expresses the integral of the meromorphic function round a contour which includes a finite number of its simple poles. It can be obtained otherwise from Corollary II. of §19, by adopting a process similar to that adopted above, viz., by making each of the curves in that Corollary circles round the points $a_1,\ldots,a_n$ with radii sufficiently small to secure that each circle is outside all the others.

## Ex. 1

A function $f(z)$ is holomorphic over an area bounded by a simple closed curve; and $a,b,c$ are three points within the area. Find the value of the integral

$$
\frac{1}{2\pi i}\int\frac{f(z)\,dz}{(z-a)(z-b)(z-c)}
$$

taken round the curve; and shew what it becomes

(i) when $a$ and $b$ coincide,

(ii) when $a,b,c$ coincide.

## Ex. 2

Let $S(\zeta/z)$ denote the sum of any set of selected terms of the series

$$
1+\frac{\zeta}{z}+\frac{\zeta^2}{z^2}+\ldots,\qquad |\zeta|<|z|,
$$

and let

$$
f(\zeta)=a_0+a_1\zeta+a_2\zeta^2+\ldots,
$$

where $f(\zeta)$ is a holomorphic function of $\zeta$ within the range; shew that the sum of the same set of terms selected from $f(\zeta)$ can be expressed in the form

$$
\frac{1}{2\pi i}\int\frac{f(z)}{z}S\left(\frac{\zeta}{z}\right)\,dz.
$$

[^1]: We shall for the future assume that, if no direction for a complete integral be specified, the positive direction is taken.
