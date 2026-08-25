# §14. Definition of an integral; definitions as to convergence

*Printed pages 20–22 (scans 0048–0050). Mathematical notation has been transcribed as TeX; the wording follows the scans, with line wrapping normalized.*

The definition of an integral, that is adopted when the variables are complex, is the natural generalisation of that definition for real variables in which it is regarded as the limit of the sum of an infinite number of infinitesimally small terms. It is as follows:—

Let $a$ and $z$ be any two points in the plane; and let them be connected by a curve of specified form, which is to be the path of variation of the independent variable. Let $f(z)$ denote any function of $z$; if any infinity of $f(z)$ lie in the vicinity of the curve, the line of the curve will be chosen so as not to pass through that infinity. On the curve, let any number of points $z_1$, $z_2$, ..., $z_n$ in succession be taken between $a$ and $z$; then, if the sum

$$
(z_1-a)f(a)+(z_2-z_1)f(z_1)+\dots+(z-z_n)f(z_n)
$$

have a limit, when $n$ is indefinitely increased so that the infinitely numerous points are in indefinitely close succession along the whole of the curve from $a$ to $z$, that limit is called the integral of $f(z)$ between $a$ and $z$. It is denoted, as in the case of real variables, by

$$
\int_a^z f(z)\,dz.
$$

It is known[^harnack] that the value of the integral of a function of a real variable between limits $a$ and $b$ is independent of the manner in which, under the customary definition, the interval between $a$ and $b$ is divided up. Assuming this result, we infer at once that the same property holds for the complex integral

$$
\int_a^z f(z)\,dz;
$$

for, if $f(z)=u+iv$, where $u$ and $v$ are real,

$$
f(z)\,dz=u\,dx-v\,dy+iu\,dy+iv\,dx,
$$

and each of the integrals

$$
\int u\,dx,\qquad \int v\,dy,\qquad \int u\,dy,\qquad \int v\,dx,
$$

taken between limits corresponding to the extremities of the curve, is independent of the way in which the range is divided up.

The limit, as the value of the integral, is associated with a particular curve: in order that the integral may have a definite value, the curve (called the *path of integration*) must, in the first instance, be specified.[^path] The integral of any function whatever may not be assumed to depend in general only upon the limits.

We have to deal with converging series; it is therefore convenient to state the definitions of the terms used. For proofs of the statements, developments, and applications in the theory of convergence, as well as the various tests of convergence, see Bromwich's *Theory of infinite series*, Carslaw's *Fourier's series and integrals*, Hobson's *Functions of a real variable*, and Pringsheim's article in the *Encyclopädie der mathematischen Wissenschaften*, t. i, pp. 49–146, where full references are given.

A series, represented by

$$
a_1,\quad a_2,\quad a_3,\quad \dots\ \text{ad inf.},
$$

is said to *converge*, when the limit of $S_n$, where

$$
S_n=a_1+a_2+\dots+a_n,
$$

as $n$ increases indefinitely, is a unique finite quantity, say $S$. When, in the same circumstances, the limit of $S_n$ either is infinite or, if finite, is not unique (that is, may be one of several quantities), the series is said[^oscillating] to *diverge*.

The necessary and sufficient condition that the series

$$
a_1,\quad a_2,\quad a_3,\quad \dots
$$

should converge is that, corresponding to every finite positive quantity $\epsilon$ taken as small as we please, an integer $m$ can be found such that

$$
\left|a_{n+1}+a_{n+2}+\dots+a_{n+r}\right|<\epsilon,
$$

for all integers $n$ such that $n\geq m$, and for every positive integer $r$.

When the series

$$
|a_1|,\quad |a_2|,\quad |a_3|,\quad \dots
$$

converges, the series

$$
a_1,\quad a_2,\quad a_3,\quad \dots
$$

converges; and it is said to converge *absolutely*. When the series of moduli $|a_1|$, $|a_2|$, $|a_3|$, ... does not converge, though the series $a_1$, $a_2$, $a_3$, ... converges, the convergence of the latter is said to be *conditional*. In a conditionally converging series, the order of the terms must be kept: derangement of the order can lead to different limits; and any assigned sum, as a limit, can be obtained by appropriate derangement. In an absolutely converging series, the order of the terms can be deranged without affecting the limit to which the series converges; the convergence is sometimes called *unconditional*.

These definitions apply to all infinite series, whatever be the source of their terms. When the terms depend upon a variable quantity $z$, and the convergence of the series is considered as $z$ varies, we have further classifications. Denote the series by

$$
f_1(z),\quad f_2(z),\quad f_3(z),\quad \dots\ \text{ad inf.},
$$

and suppose that it converges for all values of $z$ within a definite region. When any small quantity $\delta$ has been chosen, and a positive integer $m$ can be determined, such that

$$
\left|\sum_{\nu=n}^{\infty} f_\nu(z)\right|<\delta
$$

for every value of $n\geq m$ and for all values of $z$ in the region, the convergence is said to be *uniform* (sometimes *continuous*).

Convergence may be uniform without being absolute; it can be absolute without being uniform.

When a series converges for all values of $z$ such that $|z|<r$, but not for $|z|>r$, then the circle, centre the origin of the variable $z$ and radius equal to $r$, is called the *circle of convergence*: and the radius is sometimes called the *radius of convergence*. A series such as

$$
a_0,\quad a_1z,\quad a_2z^2,\quad \dots\ \text{ad inf.},
$$

converges absolutely within its circle of convergence, though not necessarily on its circumference. It does not necessarily converge uniformly within its circle of convergence; but if $r'$ is a positive quantity, less than the radius of convergence by a finite quantity which can be taken small, the series converges uniformly within the circle of radius $r'$ concentric with its circle of convergence.

Again, when a uniformly converging series is integrated term by term over a finite range, the resulting series also converges uniformly. But a uniformly converging series can be differentiated term by term only if the series of derivatives converges.

[^harnack]: Harnack's *Introduction to the Calculus*, (Cathcart's translation), §§ 103, 142.
[^path]: This specification is tacitly supplied when the variables are real: the variable point moves along the axis of $x$.
[^oscillating]: Sometimes the series, such that the limit of $S_n$ when $n$ is infinitely large is one of a number of finite quantities (depending upon the way in which $S_n$ is formed), are called oscillating.
