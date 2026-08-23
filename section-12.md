# §12. Definitions

*Printed pages 15–17 (scans 0043–0045). Mathematical notation has been transcribed as TeX; the wording follows the scan, with line wrapping normalized.*

As the tests which are sufficient and necessary to ensure that a complex quantity is a function of $z$ have been given, we shall assume that all complex quantities dealt with are functions of the complex variable (§§ 6, 7). Their characteristic properties, their classification, and some of the simpler applications will be considered in the succeeding chapters.

Some initial definitions and explanations will now be given.

## (i)

It has been assumed that the function considered has a differential coefficient, that is, that the rate of variation of the function in any direction is independent of that direction by being independent of the mode of change of the variable. We have already decided (§ 8) not to use the term analytic for such a function. It is often called monogenic, when it is necessary to assign a specific name; but for the most part we shall omit the name, the property being tacitly assumed[^1].

We can at once prove from the definition that, when the derivative

$$
w_1\left(=\frac{dw}{dz}\right)
$$

exists, it is itself a function. For

$$
w_1=\frac{\partial w}{\partial x}=\frac1i\frac{\partial w}{\partial y}
$$

are equations which, when satisfied, ensure the existence of $w_1$; hence

$$
\begin{aligned}
\frac1i\frac{\partial w_1}{\partial y}
&=\frac1i\frac{\partial}{\partial y}\left(\frac{\partial w}{\partial x}\right)\\
&=\frac{\partial}{\partial x}\left(\frac1i\frac{\partial w}{\partial y}\right)\\
&=\frac{\partial w_1}{\partial x},
\end{aligned}
$$

shewing, as in § 8, that the derivative $dw_1/dz$ is independent of the direction in which $dz$ vanishes. Hence $w_1$ is a function of $z$.

Similarly for all the derivatives in succession.

## (ii)

Since the functional dependence of a complex is ensured only if the value of the derivative of that complex be independent of the manner in which the point $z+dz$ approaches to coincidence with $z$, a question naturally suggests itself as to the effect on the character of the function that may be caused by the manner in which the variable itself has come to the value of $z$.

If a function has only one value for each given value of the variable, whatever be the manner in which the variable has come to that value, the function is called uniform[^2]. Hence two different paths from a point $a$ to a point $z$ give at $z$ the same value for any uniform function; and a closed curve, beginning at any point and completely described by the $z$-variable will lead to the initial value of $w$, the corresponding $w$-curve being closed, if $z$ has not passed through any point which makes $w$ infinite.

The simplest class of uniform functions is constituted by rational functions.

## (iii)

If a function has more than one value for any given value of the variable, or if its value can be changed by modifying the path in which the variable reaches that given value, the function is called multiform[^3]. Characteristics of curves, which are graphs of multiform functions corresponding to a $z$-curve, will hereafter be discussed.

One of the simplest classes of multiform functions is constituted by algebraical irrational functions, that is, functions defined by an irresoluble algebraic equation $f(w,z)=0$, where $f$ is a polynomial in $w$ and $z$.

The rational functions in (ii) occur when $f$ is of only the first degree in $w$.

## (iv)

A multiform function has a number of different values for the same value of $z$, and these values vary with $z$: the aggregate of the variations of any one of the values is called a branch of the function. Although the function is multiform for unrestricted variation of the variable, it often happens that a branch is uniform when the variable is restricted to particular regions in the plane.

## (v)

A point in the plane, at which two or more branches of a multiform function assume the same value, and near which those branches are interchanged (§ 94, Note) by appropriate modification in the path of $z$, is called a branch-point[^4] of the function. The relations of the branches in the immediate vicinity of a branch-point will be discussed hereafter.

## (vi)

A function, which is monogenic, uniform and continuous over any part of the $z$-plane, is called holomorphic[^5] over that part of the plane. When a function is called holomorphic without any limitation, the usual implication is that the character is preserved over the whole of the plane which is not at infinity.

The simplest example of a holomorphic function is a polynomial in the variable.

## (vii)

A root (or a zero) of a function is a value of the variable for which the function vanishes.

The simplest case of occurrence of roots is in a rational integral function, various theorems relating to which (e.g., the number of roots included within a given contour) will be found in treatises on the theory of equations.

## (viii)

The infinities of a function are the points at which the value of the function is infinite. Among them, the simplest are the poles[^6] of the function, a pole being an infinity such that in its immediate vicinity the reciprocal of the function is holomorphic.

Infinities other than poles (and also the poles) are called the singular points, or the singularities, of the function: their classification must be deferred until after the discussion of properties of functions.

## (ix)

A function, which is monogenic, uniform and, except at poles, continuous, is called a meromorphic function[^7]. The simplest example is a rational fraction.

[^1]: This is in fact done by Riemann, who calls such a dependent complex simply a *function*. Weierstrass, however, has proved (see § 85, *post*) that the idea of a monogenic function of a complex variable and the idea of dependence expressible by arithmetical operations are not coextensive. The definition is thus necessary; but the practice indicated in the text will be adopted, as non-monogenic functions will be of relatively rare occurrence.

[^2]: Also monodromic, or monotropic; with German writers the title is *eindeutig*, occasionally, *einadrig*.

[^3]: Also polytropic; with German writers the title is *mehrdeutig*.

[^4]: Also critical point, which, however, is sometimes used to include all special points of a function; with German writers the title is *Verzweigungspunkt*, and sometimes *Windungspunkt*. French writers use *point de ramification*, and Italians *punto di giramento* and *punto di diramazione*.

[^5]: Also synectic.

[^6]: Also polar discontinuities; also (§ 32) accidental singularities.

[^7]: Sometimes regular, but this term will be reserved for the description of another property of functions.
