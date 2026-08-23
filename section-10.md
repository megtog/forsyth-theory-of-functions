# §10. Conditions of functionality

*Printed pages 12–13 (scans 0040–0041). Mathematical notation has been transcribed as TeX; the wording follows the scan, with line wrapping normalized.*

The analytical conditions of functionality, under either of the adopted definitions, are the equations (2). From them it at once follows that

$$
\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0,
$$

$$
\frac{\partial^2v}{\partial x^2}+\frac{\partial^2v}{\partial y^2}=0;
$$

so that neither the real nor the imaginary part of a complex function can be arbitrarily assumed.

If either part be given, the other can be deduced. For example, let $u$ be given; then we have

$$
\begin{aligned}
dv&=\frac{\partial v}{\partial x}\,dx+\frac{\partial v}{\partial y}\,dy\\
  &=-\frac{\partial u}{\partial y}\,dx+\frac{\partial u}{\partial x}\,dy,
\end{aligned}
$$

and therefore, except as to an additive constant, the value of $v$ is

$$
\int\left(-\frac{\partial u}{\partial y}\,dx+\frac{\partial u}{\partial x}\,dy\right).
$$

In particular, when $u$ is an integral function, it can be resolved into the sum of homogeneous parts

$$
u_1+u_2+u_3+\ldots;
$$

and then, again except as to an additive constant, $v$ can similarly be expressed as a sum of homogeneous parts

$$
v_1+v_2+v_3+\ldots.
$$

It is easy to prove that

$$
mv_m=y\frac{\partial u_m}{\partial x}-x\frac{\partial u_m}{\partial y},
$$

by means of which the value of $v$ can be obtained.

The case, when $u$ is homogeneous of zero dimensions, presents no difficulty; for then we have

$$
u=b+a\theta,
$$

$$
v=c-a\log r,
$$

where $a$, $b$, $c$ are constants.

Similarly for other special cases: and, in the most general case, only a quadrature is necessary.

The tests of functional dependence of one complex variable on another are of effective importance in the case when the supposed dependent variable arises in the form $u+iv$, where $u$ and $v$ are real; the tests are, of course, superfluous when $w$ is explicitly given as a function of $z$. When $w$ does arise in the form $u+iv$ and satisfies the conditions of functionality, perhaps the simplest method (other than by inspection) of obtaining the explicit expression in terms of $z$ is to substitute $z-iy$ for $x$ in $u+iv$; the simplified result must be a function of $z$ alone.
