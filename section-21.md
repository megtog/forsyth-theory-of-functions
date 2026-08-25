# §21. Holomorphicity of derivatives

*Printed pages 34–37 (scans 0062–0065). Mathematical notation has been transcribed as TeX; the wording follows the scans, with line wrapping normalized.*

The preceding theorems have sufficed to evaluate the integral of a function with a number of simple poles. We now proceed to obtain further theorems, which can be used among other purposes to evaluate the integral of a function with poles of order higher than the first.

We still consider a function $f(z)$ which is holomorphic within a given region. Let $a$ be a point within the region which is not a zero of $f(z)$; we have

$$
f(a)=\frac{1}{2\pi i}\int\frac{f(z)}{z-a}\,dz.
$$

Let $a+\delta a$ be any other point within the region, so that, if $a$ be near the boundary, $|\delta a|$ is to be chosen less than the shortest distance from $a$ to the boundary; then

$$
f(a+\delta a)=\frac{1}{2\pi i}\int\frac{f(z)}{z-a-\delta a}\,dz,
$$

and therefore

$$
\begin{aligned}
f(a+\delta a)-f(a)
&=\frac{1}{2\pi i}\int\left\{-\frac{1}{z-a}+\frac{1}{z-a-\delta a}\right\}f(z)\,dz\\
&=\frac{1}{2\pi i}\int\left\{\frac{\delta a}{(z-a)^2}+\frac{(\delta a)^2}{(z-a)^2(z-a-\delta a)}\right\}f(z)\,dz,
\end{aligned}
$$

the integral being in every case taken round the boundary.

Since $f(z)$ is monogenic, the definition of $f'(a)$, the first derivative of $f(a)$, gives $f'(a)$ as the limit of

$$
\frac{f(a+\delta a)-f(a)}{\delta a}
$$

when $\delta a$ ultimately vanishes; hence we may take

$$
\frac{f(a+\delta a)-f(a)}{\delta a}=f'(a)+\sigma,
$$

where $\sigma$ is a quantity which vanishes with $\delta a$ and is therefore such that $|\sigma|$ also vanishes with $\delta a$. Hence

$$
\{f'(a)+\sigma\}\delta a
=\frac{\delta a}{2\pi i}\int\left\{\frac{1}{(z-a)^2}+\frac{\delta a}{(z-a)^2(z-a-\delta a)}\right\}f(z)\,dz;
$$

dividing out by $\delta a$ and transposing, we have

$$
f'(a)-\frac{1}{2\pi i}\int\frac{f(z)}{(z-a)^2}\,dz
=-\sigma+\frac{\delta a}{2\pi i}\int\frac{f(z)}{(z-a)^2(z-a-\delta a)}\,dz.
$$

As yet, there is no limitation on the value of $\delta a$; we now proceed to a limit by making $a+\delta a$ approach to coincidence with $a$, viz., by making $\delta a$ ultimately vanish. Taking moduli of each of the members of the last equation, we have

$$
\begin{aligned}
\left|f'(a)-\frac{1}{2\pi i}\int\frac{f(z)}{(z-a)^2}\,dz\right|
&=\left|-\sigma+\frac{\delta a}{2\pi i}\int\frac{f(z)}{(z-a)^2(z-a-\delta a)}\,dz\right|\\
&<|\sigma|+\frac{|\delta a|}{2\pi}\left|\int\frac{f(z)}{(z-a)^2(z-a-\delta a)}\,dz\right|.
\end{aligned}
$$

Let the greatest modulus of

$$
\frac{f(z)}{(z-a)^2(z-a-\delta a)}
$$

for points $z$ along the boundary be $M$, which is a finite quantity on account of the conditions applying to $f(z)$ and of the fact that the points $a$ and $a+\delta a$ lie within the region and are not on the boundary. Then, by §15,

$$
\left|\int\frac{f(z)}{(z-a)^2(z-a-\delta a)}\,dz\right|<MS,
$$

where $S$ is the whole length of the boundary, a finite quantity. Hence

$$
\left|f'(a)-\frac{1}{2\pi i}\int\frac{f(z)}{(z-a)^2}\,dz\right|
<|\sigma|+\frac{|\delta a|}{2\pi}MS.
$$

When we proceed to the limit in which $\delta a$ vanishes, we have $|\delta a|=0$ and $|\sigma|=0$, ultimately; hence the modulus on the left-hand side ultimately vanishes, and therefore the quantity to which that modulus belongs is itself zero, that is,

$$
f'(a)-\frac{1}{2\pi i}\int\frac{f(z)}{(z-a)^2}\,dz=0,
$$

or

$$
f'(a)=\frac{1}{2\pi i}\int\frac{f(z)}{(z-a)^2}\,dz.
$$

This theorem evidently corresponds in complex variables to the well-known theorem of differentiation with respect to a constant under the integral sign when all the quantities concerned are real.

Proceeding in the same way, we can prove that

$$
\frac{f'(a+\delta a)-f'(a)}{\delta a}
=\frac{2!}{2\pi i}\int\frac{f(z)}{(z-a)^3}\,dz+\theta,
$$

where $\theta$ is a small quantity which vanishes with $\delta a$. Moreover the integral on the right-hand side is finite, for the subject of integration is everywhere finite along the path of integration which itself is of finite length. Hence, first, a small change in the independent variable leads to a change of the same order of small quantities in the value of the function $f'(a)$, which shews that $f'(a)$ is a continuous function. Secondly, denoting

$$
f'(a+\delta a)-f'(a)
$$

by $\delta f'(a)$, we have the limiting value of $\delta f'(a)/\delta a$ equal to the integral on the right-hand side when $\delta a$ vanishes, that is, the derivative of $f'(a)$ has a value independent of the form of $\delta a$ and therefore $f'(a)$ is monogenic. Denoting this derivative by $f''(a)$, we have

$$
f''(a)=\frac{2!}{2\pi i}\int\frac{f(z)}{(z-a)^3}\,dz.
$$

Thirdly, the function $f'(a)$ is uniform: for it is the limit of the value of

$$
\frac{f(a+\delta a)-f(a)}{\delta a};
$$

and both $f(a)$ and $f(a+\delta a)$ are uniform. Lastly, it is finite; for (§15) it is the value of the integral

$$
\frac{1}{2\pi i}\int\frac{f(z)}{(z-a)^2}\,dz,
$$

in which the length of the path is finite and the subject of integration is finite at every point of the path.

Hence $f'(a)$ is continuous, monogenic, uniform, and finite, throughout the whole of the region in which $f(z)$ has these properties: it is a holomorphic function. Hence:—

*When a function is holomorphic in any region of the plane bounded by a simple curve, its derivative is also holomorphic within that region.*

And, by repeated application of this theorem:—

*When a function is holomorphic in any region of the plane bounded by a simple curve, it has an unlimited number of successive derivatives each of which is holomorphic within the region.*

All these properties have been shewn to depend solely upon the holomorphic character of the fundamental function; but the inferences relating to the derivatives have been proved only for points within the region and not for points on the boundary. If the foregoing methods be used to prove them for points on the boundary, they require that a consecutive point shall be taken in any direction; in the absence of knowledge concerning the fundamental function for points outside (even though just outside), no inferences can be drawn justifiably.

An illustration of this statement is furnished by the hypergeometric series which, together with all its derivatives, is holomorphic within a circle of radius unity and centre the origin. The series converges everywhere on the circumference, provided $\gamma>\alpha+\beta$. But the corresponding condition for convergence on the circumference ceases to be satisfied for some one of the derivatives and for all which succeed it: as such functions do not then converge, the circumference of the circle must be excluded from the region within which the derivatives are holomorphic.

## Ex.

Let $F(z)$ and $G(z)$ denote two functions of $z$, holomorphic in a region enclosing the point $a$, which is a zero of $G(z)$ and a non-zero of $F(z)$; prove that

$$
\frac{1}{2\pi i}\int\frac{F(z)}{\{G(z)\}^2}\,dz
=\frac{F'(a)G'(a)-F(a)G''(a)}{\{G'(a)\}^3},
$$

when $a$ is a simple root of $G(z)=0$, and that

$$
\frac{1}{2\pi i}\int\frac{F(z)}{G(z)}\,dz
=\frac{6F'(a)G''(a)-2F(a)G'''(a)}{3\{G''(a)\}^2},
$$

when $a$ is a double root of $G(z)=0$, both integrals being taken round a small contour which encloses $a$ but no other zero of $G(z)$.
