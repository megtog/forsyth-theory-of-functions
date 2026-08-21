# §11. Example of Riemann's definition

*Printed pages 13–15 (scans 0041–0043). Mathematical notation has been
transcribed as TeX; the wording follows the scan, with line wrapping
normalized.*

Conversely, when $w$ is explicitly given as a function of $z$ and it is
divided into its real and its imaginary parts, these parts individually
satisfy the foregoing conditions attaching to $u$ and $v$. Thus $\log r$, where
$r$ is the distance of a point $z$ from a point $a$, is the real part of
$\log(z-a)$; it therefore satisfies the equation

$$
\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0.
$$

Again, $\phi$, the angular coordinate of $z$ relative to the same point $a$,
is the real part of $-i\log(z-a)$ and satisfies the same equation: the more
usual form of $\phi$ being $\tan^{-1}\{(y-y_0)/(x-x_0)\}$, where
$a=x_0+iy_0$. Again, if a point $z$ be distant $r$ from $a$ and $r'$ from $b$,
then $\log(r/r')$, being the real part of $\log\{(z-a)/(z-b)\}$, is a solution
of the same equation.

The following example, the result of which will be useful subsequently[^1],
uses the property that the value of the derivative is independent of the
differential element.

Consider a function

$$
u+iv=w=\log\frac{z-c}{z-c'},
$$

where $c'$ is the inverse of $c$ with regard to a circle, centre the origin
$O$ and radius $R$. Then

$$
u=\log\left|\frac{z-c}{z-c'}\right|;
$$

so the curves, $u=\text{constant}$, are circles. Let (fig. 4) $Oc=r$,
$\angle xOc=a$, so that

$$
c=re^{ai},\qquad c'=\frac{R^2}{r}e^{ai};
$$

then if

$$
\left|\frac{z-c}{z-c'}\right|=\frac rR\lambda,
$$

the values of $\lambda$ for points in the interior of the circle of radius $R$
vary from zero, when the circle $u=\text{constant}$ is the point $c$, to unity,
when the circle $u=\text{constant}$ is the circle of radius $R$. Let the point
$K(=\theta e^{ai})$ be the centre of the circle determined by a value of
$\lambda$, and let its radius be $\rho(=\tfrac12MN)$. Then since

$$
\frac{cM}{c'M}=\frac rR\lambda=\frac{cN}{c'N},
$$

we have

$$
\frac{r+\rho-\theta}{\dfrac{R^2}{r}+\rho-\theta}
=\frac rR\lambda
=\frac{\theta+\rho-r}{\dfrac{R^2}{r}-\theta-\rho},
$$

whence

$$
\rho=\frac{\lambda R(R^2-r^2)}{R^2-r^2\lambda^2},
\qquad
\theta=\frac{R^2r(1-\lambda^2)}{R^2-r^2\lambda^2}.
$$

![Fig. 4. The circle $u=\mathrm{constant}$, with points $O$, $K$, $c$, $c'$,
$M$, $N$, and $z$.](./assets/section-11-fig-4.jpg)

Now if $dn$ be an element of the normal drawn inwards at $z$ to the circle
$NzM$, we have

$$
\begin{aligned}
dz&=dx+i\,dy=-dn\cos\psi-i\,dn\sin\psi\\
  &=-e^{i\psi}dn,
\end{aligned}
$$

where $\psi(=\angle zKx')$ is the argument of $z$ relative to the centre of
the circle. Hence, since

$$
\frac{dw}{dz}=\frac1{z-c}-\frac1{z-c'},
$$

we have

$$
\frac{du}{dn}+i\frac{dv}{dn}
=\frac{dw}{dn}
=\left(\frac1{z-c'}-\frac1{z-c}\right)e^{\psi i}.
$$

But

$$
z=\theta e^{ai}+\rho e^{\psi i},
$$

so that

$$
z-c=\frac{\lambda(R^2-r^2)}{R^2-r^2\lambda^2}
\left(Re^{\psi i}-\lambda re^{ai}\right),
$$

and

$$
z-c'=\frac Rr\frac{R^2-r^2}{R^2-r^2\lambda^2}
\left(\lambda re^{\psi i}-Re^{ai}\right);
$$

and therefore

$$
\frac{du}{dn}+i\frac{dv}{dn}
=\frac{R^2-r^2\lambda^2}{R^2-r^2}e^{\psi i}
\left\{
\frac{r}{R}\frac1{\lambda re^{\psi i}-Re^{ai}}
-\frac1\lambda\frac1{Re^{\psi i}-\lambda re^{ai}}
\right\}.
$$

Hence, equating the real parts, it follows that

$$
\frac{du}{dn}
=-\frac{(R^2-r^2\lambda^2)^2}
{\lambda R(R^2-r^2)\{R^2-2Rr\lambda\cos(\psi-a)+\lambda^2r^2\}},
$$

the differential element $dn$ being drawn inwards from the circumference of
the circle.

The application of this method is evidently effective when the curves
$u=\text{constant}$, arising from a functional expression of $w$ in terms of
$z$, are a family of non-intersecting algebraical curves.

## Ex. 1

Prove that, if $z_1$ and $z_2$ denote two complex variables,

$$
|z_1+z_2|\leq|z_1|+|z_2|,
\qquad
|z_1-z_2|\geq|z_1|-|z_2|.
$$

## Ex. 2

Find the values of $u$ and $v$ when $w$ is defined as a function of $z$ in the
following cases:—

$$
\begin{aligned}
\text{(i)}\quad&z=(w+i)^2;\\
\text{(ii)}\quad&z=(1+\cos w)e^{wi};\\
\text{(iii)}\quad&\frac{1-(1-z)^{1/2}}{1+(1-z)^{1/2}}=e^w,\quad w^2,\quad\log w.
\end{aligned}
$$

In each case, trace the curves $u=a$, $v=c$, regarded as loci in the plane of
$x$, $y$.

## Ex. 3

Show that $x^2-y^2-2ixy$ is not a function of $z$; and that

$$
x^3-3xy^2+i(3x^2y-y^3)+ax
$$

is a function of $z$ only when $a=0$.

## Ex. 4

Show that a possible value of $u$ is

$$
(x-y)(x^2+4xy+y^2),
$$

and determine the associated value of $w$ in terms of $z$.

Determine also the value of $w$ in terms of $z$ when the preceding expression
is the value of $u-v$.

## Ex. 5

Find the value of $v$, and of $w$ in terms of $z$, when

$$
u=\frac{\sin x}{\cosh y-\cos x}.
$$

## Ex. 6

Prove that, when $x$ and $y$ are regarded as functions of $u$ and $v$ (with the
foregoing notation), the relations

$$
\frac{\partial x}{\partial u}=\frac{\partial y}{\partial v},
\qquad
\frac{\partial x}{\partial v}=-\frac{\partial y}{\partial u},
$$

$$
\frac{\partial^2x}{\partial u^2}+\frac{\partial^2x}{\partial v^2}=0,
\qquad
\frac{\partial^2y}{\partial u^2}+\frac{\partial^2y}{\partial v^2}=0,
$$

are satisfied.

## Ex. 7

Show that, if $A$ and $B$ are any two fixed points in a plane; if $P$ is any
variable point $(x,y)$, and if $\theta$ denotes the angle $APB$, then

$$
\frac{\partial^2\theta}{\partial x^2}
+\frac{\partial^2\theta}{\partial y^2}=0.
$$

Construct the function of $z$, $=x+iy$, of which $\theta$ is the real part,
and also the function of $z$ of which $i\theta$ is the imaginary part.

## Ex. 8

Given $\lambda$, a function of $x$ and $y$; show that $\phi(\lambda)$ can be
the real part of a function of $z$ if the quantity

$$
\left(
\frac{\partial^2\lambda}{\partial x^2}
+\frac{\partial^2\lambda}{\partial y^2}
\right)
\mathbin{\div}
\left\{
\left(\frac{\partial\lambda}{\partial x}\right)^2
+\left(\frac{\partial\lambda}{\partial y}\right)^2
\right\}
$$

is expressible in terms of $\lambda$ alone.

Verify that the condition is satisfied when
$\lambda=x+(x^2+y^2)^{1/2}$; and obtain the function of $z$ which has
$\phi(\lambda)$ for its real part.

[^1]: In §217, in connection with the investigations of Schwarz, by whom the
    result is stated, *Ges. Werke*, t. ii, p. 183.
