# §22. Higher derivatives and dominant functions

*Printed pages 37–39 (scans 0065–0067). Mathematical notation has been transcribed as TeX; the wording follows the scans, with line wrapping normalized.*

Expressions for the first and the second derivatives have been obtained.

By a process similar to that which gives the value of $f'(a)$, the derivative of order $n$ is obtainable in the form

$$
f^{(n)}(a)=\frac{n!}{2\pi i}\int\frac{f(z)}{(z-a)^{n+1}}\,dz,
$$

the integral being taken round the whole boundary of the region or round any curves which arise from deformation of the boundary, provided that no point of the curves in the final form of the boundary or in any intermediate form of the boundary is indefinitely near to $a$.

In the case when the curve of integration is a circle, no point of which circle may lie outside the boundary of the region, we have a modified form for $f^{(n)}(a)$.

For points along the circumference of the circle with centre $a$ and radius $r$, let $z-a=re^{\theta i}$, so that, as before,

$$
\frac{dz}{z-a}=i\,d\theta;
$$

then $0$ and $2\pi$ being taken as the limits of $\theta$, we have

$$
f^{(n)}(a)=\frac{n!}{2\pi r^n}\int_0^{2\pi}e^{-n\theta i}f(a+re^{\theta i})\,d\theta.
$$

Let $M$ be the greatest value of the modulus of $f(z)$ for points on the circumference (or, as it may be convenient to consider, for points on or within the circumference): then

$$
\begin{aligned}
|f^{(n)}(a)|
&<\frac{n!}{2\pi r^n}\int_0^{2\pi}|e^{-n\theta i}|\,|f(a+re^{\theta i})|\,d\theta\\
&<\frac{n!}{2\pi r^n}\int_0^{2\pi}M\,d\theta\\
&<n!\frac{M}{r^n}.
\end{aligned}
$$

Now, let a function $\phi(z)$ be defined by the equation

$$
\phi(z)=\frac{M}{1-\dfrac{z-a}{r}};
$$

evidently it can be expanded in a series of ascending powers of $z-a$ which converges within the circle. The series is

$$
\phi(z)=M\left\{1+\frac{z-a}{r}+\frac{(z-a)^2}{r^2}+\ldots\right\},
$$

so that

$$
\frac{d^n\phi(z)}{dz^n}
=n!\frac{M}{r^n}\left\{1+(n+1)\frac{z-a}{r}+\ldots\right\}.
$$

Hence

$$
\left[\frac{d^n\phi(z)}{dz^n}\right]_{z=a}=n!\frac{M}{r^n};
$$

so that, if the value of the $n$th derivative of $\phi(z)$, when $z=a$, be denoted by $\phi^{(n)}(a)$, we have $|f^{(n)}(a)|<\phi^{(n)}(a)$.

These results can be extended to functions of more than one variable: the proof is similar to the foregoing proof. When there are two variables, say $z$ and $z'$, the results may be stated as follows:—

For all points $z$ within a given simple curve $C$ in the $z$-plane and all points $z'$ within a given simple curve $C'$ in the $z'$-plane, let $f(z,z')$ be a holomorphic function; then, if $a$ be any point within $C$ and $a'$ any point within $C'$,

$$
\frac{n!\,n'!}{(2\pi i)^2}
\iint\frac{f(z,z')}{(z-a)^{n+1}(z'-a')^{n'+1}}\,dz\,dz'
=\frac{\partial^{n+n'}f(a,a')}{\partial a^n\partial a'^{n'}},
$$

where $n$ and $n'$ are any integers and the integral is taken positively round the two curves $C$ and $C'$.

If $M$ be the greatest value of $|f(z,z')|$ for points $z$ and $z'$ within their respective regions when the curves $C$ and $C'$ are circles of radii $r,r'$ and centres $a,a'$, then

$$
\left|\frac{\partial^{n+n'}f(a,a')}{\partial a^n\partial a'^{n'}}\right|
<n!\,n'!\frac{M}{r^n r'^{n'}},
$$

and if

$$
\phi(z,z')
=\frac{M}{\left(1-\dfrac{z-a}{r}\right)\left(1-\dfrac{z'-a'}{r'}\right)},
$$

then

$$
\left|\frac{\partial^{n+n'}f(a,a')}{\partial a^n\partial a'^{n'}}\right|
<\frac{\partial^{n+n'}\phi(z,z')}{\partial z^n\partial z'^{n'}},
$$

when $z=a$ and $z'=a'$ in the derivative of $\phi(z,z')$.

A function $\phi$, related in this manner to a function $f$ in association with which it is constructed, is sometimes called[^1] a *dominant function*.

[^1]: Poincaré uses the term *majorante*.
